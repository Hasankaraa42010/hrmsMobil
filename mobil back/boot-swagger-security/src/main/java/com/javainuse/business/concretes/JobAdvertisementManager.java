package com.javainuse.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javainuse.business.adapters.JobAdvertisementService;
import com.javainuse.core.utilities.Results.Result;
import com.javainuse.core.utilities.Results.SuccessResult;
import com.javainuse.dto.adapters.JobAdvertisementRepository;
import com.javainuse.entities.concretes.JobAdvertisement;


@Service
public class JobAdvertisementManager implements JobAdvertisementService {
	@Autowired
	private JobAdvertisementRepository advertisementRepository;
	
	public JobAdvertisementManager(JobAdvertisementRepository advertisementRepository) {
		super();
		this.advertisementRepository = advertisementRepository;
	}


	
	
	@Override
	public Result add(JobAdvertisement advertisement) {
		this.advertisementRepository.save(advertisement);
		return new SuccessResult();
	}

}
