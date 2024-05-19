package com.koureer.backend.dto;

import lombok.Data;

@Data
public class CompanyDTO {
    long id;
    String name;
    String phoneNumber;
    String country;
    String description;

    public CompanyDTO(long id, String name, String phoneNumber, String country, String description) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.description = description;
    }
}
