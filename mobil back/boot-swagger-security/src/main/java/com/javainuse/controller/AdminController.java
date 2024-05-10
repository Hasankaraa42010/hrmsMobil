package com.javainuse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.javainuse.business.adapters.AdminService;
import com.javainuse.business.adapters.EmployeeService;
import com.javainuse.core.utilities.Results.DataResult;
import com.javainuse.core.utilities.Results.Result;
import com.javainuse.dto.adapters.AdminRepository;
import com.javainuse.entities.concretes.Admin;
import com.javainuse.entities.concretes.Application;
import com.javainuse.entities.concretes.JobAdvertisement;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/admin")
public class AdminController {
	@Autowired
	private AdminService adminService;

	public AdminController(AdminService adminService) {

		this.adminService = adminService;
	}
	@PostMapping("/addJob")
	public Result add(@RequestBody JobAdvertisement advertisement) {
		return this.adminService.add(advertisement);
	}
	@PostMapping("/add/admin")
	public Result add(@RequestBody Admin admin) {
		return this.adminService.signIn(admin);
	}
	@GetMapping("getAllApplicationForJobAdvertisementId")
	public DataResult<List<Application>> getAllJobAdvertisement(@RequestParam int id) {
		return this.adminService.getAllJobAdvertisement(id);
	}
}
