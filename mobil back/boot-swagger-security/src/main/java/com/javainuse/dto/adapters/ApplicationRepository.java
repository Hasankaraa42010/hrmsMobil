package com.javainuse.dto.adapters;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainuse.entities.concretes.Application;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {
    List<Application> findByJobAdvertisementId(int jobAdvertisementId);
//List<Application> getBy
}
