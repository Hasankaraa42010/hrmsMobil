package com.javainuse.dto.adapters;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainuse.entities.concretes.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
