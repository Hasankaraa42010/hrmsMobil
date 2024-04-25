package com.javainuse.dto.adapters;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainuse.entities.concretes.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
	Employee findByEmail(String email);
	//Employee findByEmail(String email);
	//Employee getById(int id);
}
