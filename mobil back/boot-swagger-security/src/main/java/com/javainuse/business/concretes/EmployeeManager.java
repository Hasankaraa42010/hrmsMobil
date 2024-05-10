package com.javainuse.business.concretes;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javainuse.business.adapters.ApplicationService;
import com.javainuse.business.adapters.EmployeeService;
import com.javainuse.core.utilities.Results.DataResult;
import com.javainuse.core.utilities.Results.ErrorDataResult;
import com.javainuse.core.utilities.Results.ErrorResult;
import com.javainuse.core.utilities.Results.Result;
import com.javainuse.core.utilities.Results.SuccessDataResult;
import com.javainuse.core.utilities.Results.SuccessResult;
import com.javainuse.dto.adapters.AdminRepository;
import com.javainuse.dto.adapters.EmployeeRepository;
import com.javainuse.dto.adapters.JobAdvertisementRepository;
import com.javainuse.entities.concretes.Admin;
import com.javainuse.entities.concretes.Application;
import com.javainuse.entities.concretes.Employee;
import com.javainuse.entities.concretes.JobAdvertisement;

import lombok.Data;

@Data
@Service
public class EmployeeManager implements EmployeeService{
	@Autowired
	private EmployeeRepository employeeRepository;
	private ApplicationService applicationService;
	private JobAdvertisementRepository advertisementRepository;
	public EmployeeManager(EmployeeRepository employeeRepository,
			ApplicationService applicationService,
			JobAdvertisementRepository advertisementRepository
			) {
		this.applicationService=applicationService;
		this.employeeRepository = employeeRepository;
		this.advertisementRepository=advertisementRepository;
	}

	@Override
	public Result signIn(Employee user) {
		if(user.getname().isEmpty() || user.getCity().isEmpty() ||
				user.getPassword().isEmpty() || user.getPhoneNumber().isEmpty()
				|| user.getCity().isEmpty() || user.getJob().isEmpty() 
				|| user.getExperience()==0 || user.getArea().isEmpty())
			return new ErrorResult("Tüm alanların doldurulması zorunludur");
		else {
			if(user.getname().length()<5) {
				return new ErrorResult("İsim kısmı en az 6 harf olmalı");
			}
			else if(user.getPassword().length()<5) {
				return new ErrorResult("İsim kısmı en az 6 harf olmalı");
			}
			else if(user.getPhoneNumber().length()!=11) {
				return new ErrorResult("Telefon numarası hatalı");
			}
			else {
				for(Employee employee:this.employeeRepository.findAll()) {
					if(employee.getEmail().equals(user.getEmail())) {
						return new ErrorResult("Email onceden kullanılmış");
					}
					else if(employee.getPhoneNumber().equals(user.getPhoneNumber())) {
						return new ErrorResult("Telefon numarası onceden kullanılmış");
					}
				}
				
		        String regex = "^(.+)@(.+)$";
		        Pattern pattern = Pattern.compile(regex);
		        Matcher matcher = pattern.matcher(user.getEmail());

		        if (matcher.matches()) {
		        	this.employeeRepository.save(user);
		    		
		    		return new SuccessResult("Eklendi");
		        } else {
		        	return new ErrorResult("E-posta adresi geçersiz");
		          
		        }	
			}
			
		}
		
	}

	@Override
	public Result login(String email,String password) {
		 Employee employee = employeeRepository.findByEmail(email);
	        if (employee == null) {
	            return new ErrorResult("Kullanıcı bulunamadı.");
	        }
	        else if((employee.getPassword().equals(password)))
	        	return new SuccessResult("Giriş başarılı");
	        	
	        else return new ErrorResult("Hatalı Şifre");
	}

	@Override
	public DataResult<Employee> findByEmail(String email) {
		Employee employee=this.employeeRepository.findByEmail(email);
		if(employee!=null) {
			return new SuccessDataResult<Employee>(employee,"Kullanıcı getirildi");
			
		}
		else return new ErrorDataResult<Employee>("Kullanıcı Bulunamadı");
	}

	@Override
	public Result addApp(int employeeId,int jobadvertisementId) {
    Employee employee=this.employeeRepository.getById(employeeId);
	JobAdvertisement advertisement=this.advertisementRepository.findById(jobadvertisementId);
	Application application=new Application(employee,advertisement,false);
	this.applicationService.addApp(application);
	return new SuccessResult("Başvuru onaylandı");
	}
}
