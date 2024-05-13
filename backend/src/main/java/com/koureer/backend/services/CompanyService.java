package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.koureer.backend.entities.Company;
import com.koureer.backend.repositories.CompanyRepository;

@Service
public class CompanyService {

    @Autowired
    CompanyRepository companyRepository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void save(Company company) {
        try {
            company.setPassword(passwordEncoder.encode(company.getPassword()));
            companyRepository.save(company);
        } catch (Exception exception) {
            System.out.println(exception);
        }
    }

}
