package com.javainuse.dto.adapters;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainuse.entities.concretes.JobAdvertisement;

public interface JobAdvertisementRepository extends JpaRepository<JobAdvertisement, Integer> {
JobAdvertisement findById(int id);
}
