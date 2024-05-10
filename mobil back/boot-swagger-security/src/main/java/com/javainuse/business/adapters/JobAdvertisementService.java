package com.javainuse.business.adapters;

import com.javainuse.core.utilities.Results.Result;
import com.javainuse.entities.concretes.JobAdvertisement;

public interface JobAdvertisementService {
	Result add(JobAdvertisement advertisement);
}
