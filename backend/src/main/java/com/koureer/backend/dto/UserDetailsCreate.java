package com.koureer.backend.dto;

import com.koureer.backend.entities.UserDetails;

public record UserDetailsCreate(

        boolean gender,
        String phoneNumber,
        String country,
        String description) {

    public UserDetails toUserDetails() {
        UserDetails userDetails = new UserDetails();
        userDetails.setGender(gender);
        userDetails.setPhoneNumber(phoneNumber);
        userDetails.setCountry(country);
        userDetails.setDescription(description);
        return userDetails;
    }
}
