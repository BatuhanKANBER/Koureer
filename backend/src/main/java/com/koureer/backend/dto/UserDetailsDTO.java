package com.koureer.backend.dto;

import lombok.Data;

@Data
public class UserDetailsDTO {
    long id;
    boolean gender;
    String phoneNumber;
    String country;
    String description;

    public UserDetailsDTO(long id, boolean gender, String phoneNumber, String country, String description) {
        this.id = id;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.country = country;
        this.description = description;
    }
}