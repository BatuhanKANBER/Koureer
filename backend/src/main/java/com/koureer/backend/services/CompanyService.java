package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.koureer.backend.entities.Company;
import com.koureer.backend.entities.Role;
import com.koureer.backend.repositories.CompanyRepository;
import com.koureer.backend.repositories.RoleRepository;

@Service
public class CompanyService {

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    RoleRepository roleRepository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void save(Company company) {
        Role roleInDB = roleRepository.findByname("company");
        try {
            company.setPassword(passwordEncoder.encode(company.getPassword()));
            company.setRole(roleInDB);
            companyRepository.save(company);
        } catch (Exception exception) {
            System.out.println(exception);
        }
    }

}
