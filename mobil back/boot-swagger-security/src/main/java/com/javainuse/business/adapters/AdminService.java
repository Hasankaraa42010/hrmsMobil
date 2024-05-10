package com.javainuse.business.adapters;

import java.util.List;

import com.javainuse.core.utilities.Results.DataResult;
import com.javainuse.core.utilities.Results.Result;
import com.javainuse.entities.concretes.Admin;
import com.javainuse.entities.concretes.Application;
import com.javainuse.entities.concretes.JobAdvertisement;

public interface AdminService extends UserService<Admin>{
Result add(JobAdvertisement advertisement);
DataResult<List<Application>> getAllJobAdvertisement(int id);
}
