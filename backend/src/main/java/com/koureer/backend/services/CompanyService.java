package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koureer.backend.dto.CompanyCrudDTO;
import com.koureer.backend.entities.Company;
import com.koureer.backend.entities.User;
import com.koureer.backend.repositories.CompanyRepository;
import com.koureer.backend.repositories.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class CompanyService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CompanyRepository companyRepository;

    public Company save(Long id, Company company) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User is not found."));
        try {
            if (user.getRole().equals("COMPANY")) {
                user.setCompany(company);
                companyRepository.save(company);
                userRepository.save(user);
                return company;
            } else {
                throw new RuntimeException("User hasn't company role.");
            }
        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }
    }

    public Company update(Long id, CompanyCrudDTO companyCrudDTO) {
        return companyRepository.findById(id).map(existingCompany -> {
            existingCompany.setName(companyCrudDTO.name());
            existingCompany.setCountry(companyCrudDTO.country());
            existingCompany.setPhoneNumber(companyCrudDTO.phoneNumber());
            existingCompany.setDescription(companyCrudDTO.description());
            return companyRepository.save(existingCompany);
        }).orElseThrow(() -> new RuntimeException("Company not found."));
    }

    @Transactional
    public void delete(Long id) {
        if (companyRepository.existsById(id)) {
            userRepository.unlinkCompany(id);
            companyRepository.deleteById(id);
        } else {
            throw new RuntimeException("Company not found.");
        }
    }

}
