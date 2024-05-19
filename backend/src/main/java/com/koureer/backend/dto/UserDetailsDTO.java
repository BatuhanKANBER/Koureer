package com.koureer.backend.dto;

import com.koureer.backend.entities.UserDetails;

import lombok.Data;

@Data
public class UserDetailsDTO {
    long id;
    boolean gender;
    String phoneNumber;
    String country;
    String description;

    public UserDetailsDTO(UserDetails userDetails) {
        setId(userDetails.getId());
        setGender(userDetails.isGender());
        setPhoneNumber(userDetails.getPhoneNumber());
        setCountry(userDetails.getCountry());
        setDescription(userDetails.getDescription());
    }
}