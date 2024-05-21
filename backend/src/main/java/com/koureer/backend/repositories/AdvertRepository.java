package com.koureer.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.koureer.backend.entities.Advertisement;

public interface AdvertRepository extends JpaRepository<Advertisement, Long> {

}
