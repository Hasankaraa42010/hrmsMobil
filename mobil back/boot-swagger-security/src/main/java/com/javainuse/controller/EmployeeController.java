package com.javainuse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javainuse.business.adapters.EmployeeService;
import com.javainuse.core.utilities.Results.Result;
import com.javainuse.entities.concretes.Employee;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/employee")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;

	public EmployeeController(EmployeeService employeeService) {

		this.employeeService = employeeService;
	}
	@PostMapping("signIn")
	public Result signIn(@RequestBody Employee employee) {
		
		return this.employeeService.signIn(employee);
	}
	@PostMapping("/login")
	public Result login(@RequestParam String email,@RequestParam String password) {
		return this.employeeService.login(email, password);
	}
}
