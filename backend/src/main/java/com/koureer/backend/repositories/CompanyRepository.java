package com.koureer.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.koureer.backend.entities.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {
    Company findById(long id);
}
