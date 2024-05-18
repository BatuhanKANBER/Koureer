package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koureer.backend.entities.Company;
import com.koureer.backend.entities.User;
import com.koureer.backend.repositories.CompanyRepository;
import com.koureer.backend.repositories.UserRepository;

@Service
public class CompanyService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CompanyRepository companyRepository;

    public void save(Long id, Company company) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User is not found."));
        try {
            if (user.getRole() == "COMPANY") {
                user.setCompany(company);
                companyRepository.save(company);
                userRepository.save(user);
            }else{
                throw new RuntimeException("User hasn't company role.");
            }
        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }
    }

}
