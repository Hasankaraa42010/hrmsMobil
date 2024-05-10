package com.javainuse.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javainuse.business.adapters.AdminService;
import com.javainuse.business.adapters.JobAdvertisementService;
import com.javainuse.core.utilities.Results.DataResult;
import com.javainuse.core.utilities.Results.ErrorResult;
import com.javainuse.core.utilities.Results.Result;
import com.javainuse.core.utilities.Results.SuccessDataResult;
import com.javainuse.core.utilities.Results.SuccessResult;
import com.javainuse.dto.adapters.AdminRepository;
import com.javainuse.dto.adapters.ApplicationRepository;
import com.javainuse.entities.concretes.Admin;
import com.javainuse.entities.concretes.Application;
import com.javainuse.entities.concretes.JobAdvertisement;

import lombok.Data;
import net.bytebuddy.asm.Advice.This;

@Service
@Data

public class AdminManager implements AdminService {

	@Autowired
	private AdminRepository adminRepository;
	private JobAdvertisementService advertisementService;
	private ApplicationRepository applicationRepository;
	public AdminManager(AdminRepository adminRepository,JobAdvertisementService advertisementService
			,ApplicationRepository applicationRepository
			) {
		this.advertisementService=advertisementService;
		this.adminRepository = adminRepository;
		this.applicationRepository=applicationRepository;
	}

	@Override
	public Result signIn(Admin user) {
		this.adminRepository.save(user);
		return new SuccessResult("Eklendi");
	}

	@Override
	public Result login(String email, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	

	@Override
	public DataResult<Admin> findByEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Result add(JobAdvertisement advertisement) {
		 if(advertisement.getJobName().length() < 5 || advertisement.getCity().length() < 5
		            || advertisement.getName().length() < 5) {
		        return new ErrorResult("Tüm alanlar en az 5 karakterden oluşmalıdır!!");
		    }
		else {
			this.advertisementService.add(advertisement);
			return new SuccessResult("Eklendi");
		}
	}

	@Override
	public DataResult<List<Application>> getAllJobAdvertisement(int id) {
		return new SuccessDataResult<List<Application>>(this.applicationRepository.findByJobAdvertisementId(id),"Getirildi");
	}

}
