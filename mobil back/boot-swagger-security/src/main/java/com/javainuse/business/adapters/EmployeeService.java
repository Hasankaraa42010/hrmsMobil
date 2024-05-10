package com.javainuse.business.adapters;

import com.javainuse.entities.concretes.Employee;
import com.javainuse.core.utilities.Results.Result;

public interface EmployeeService extends UserService<Employee>{
Result addApp(int employeeId,int jobadvertisementId);

}
