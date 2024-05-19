package com.koureer.backend.dto;

import com.koureer.backend.entities.User;
import com.koureer.backend.validations.UniqueEmail;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserUpdateDTO(

        @NotBlank @Size(min = 4, max = 30) String name,
        @NotBlank @Size(min = 4, max = 30) String surname,
        @NotBlank @Email @UniqueEmail String email) {

    public User toUser() {
        User user = new User();
        user.setName(name);
        user.setSurname(surname);
        user.setEmail(email);
        return user;
    }
}