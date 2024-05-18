package com.koureer.backend.dto;

import com.koureer.backend.entities.Company;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CompanyCreate(

        @Size(min = 3) @NotBlank String name,
        
        String phoneNumber,

        int numberOfEmployees,

        int createdYear,

        @Size(min = 30, max = 500) String description) {

    public Company toCompany() {
        Company company = new Company();
        company.setName(name);
        company.setPhoneNumber(phoneNumber);
        company.setNumberOfEmployees(numberOfEmployees);
        company.setCreatedYear(createdYear);
        company.setDescription(description);
        company.setPhoneNumber(phoneNumber);
        return company;
    }
}
