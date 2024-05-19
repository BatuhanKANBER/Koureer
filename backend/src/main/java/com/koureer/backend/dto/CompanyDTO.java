package com.koureer.backend.dto;

import com.koureer.backend.entities.Company;

import lombok.Data;

@Data
public class CompanyDTO {
    long id;
    String name;
    String phoneNumber;
    String country;
    String description;

    public CompanyDTO(Company company) {
        setId(company.getId());
        setName(company.getName());
        setPhoneNumber(company.getPhoneNumber());
        setCountry(company.getCountry());
        setDescription(company.getDescription());
    }
}
