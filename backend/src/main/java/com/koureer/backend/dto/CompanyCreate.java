package com.koureer.backend.dto;

import com.koureer.backend.entities.Company;

public record CompanyCreate(

        String name,
        String country,
        String phoneNumber,
        String description) {

    public Company toCompany() {
        Company company = new Company();
        company.setName(name);
        company.setCountry(country);
        company.setPhoneNumber(phoneNumber);
        company.setDescription(description);
        return company;
    }
}
