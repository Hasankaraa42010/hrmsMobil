package com.javainuse.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javainuse.business.adapters.ApplicationService;
import com.javainuse.core.utilities.Results.Result;
import com.javainuse.core.utilities.Results.SuccessResult;
import com.javainuse.dto.adapters.ApplicationRepository;
import com.javainuse.entities.concretes.Application;

@Service
public class ApplicationManager implements ApplicationService{
	public ApplicationManager(ApplicationRepository applicationRepository) {
		this.applicationRepository = applicationRepository;
	}


	@Autowired
	private ApplicationRepository applicationRepository;
	
	
	@Override
	public Result addApp(Application application) {
		this.applicationRepository.save(application);
		return new SuccessResult("Eklendi");
	}

}
