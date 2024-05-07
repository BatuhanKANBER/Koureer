package com.koureer.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.koureer.backend.entities.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}