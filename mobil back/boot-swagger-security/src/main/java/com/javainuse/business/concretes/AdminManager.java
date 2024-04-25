package com.javainuse.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javainuse.business.adapters.AdminService;
import com.javainuse.core.utilities.Results.DataResult;
import com.javainuse.core.utilities.Results.Result;
import com.javainuse.core.utilities.Results.SuccessResult;
import com.javainuse.dto.adapters.AdminRepository;
import com.javainuse.entities.concretes.Admin;

import lombok.Data;

@Service
@Data

public class AdminManager implements AdminService {

	@Autowired
	private AdminRepository adminRepository;

	public AdminManager(AdminRepository adminRepository) {

		this.adminRepository = adminRepository;
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

}
