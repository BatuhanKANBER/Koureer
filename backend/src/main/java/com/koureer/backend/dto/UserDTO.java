package com.koureer.backend.dto;

import com.koureer.backend.entities.Company;
import com.koureer.backend.entities.UserDetails;

import lombok.Data;

@Data
public class UserDTO {
    long id;
    String name;
    String surname;
    String email;
    String role;
    Company company;
    UserDetails userDetails;

    public UserDTO(long id, String name, String surname, String email, String role, Company company,
            UserDetails userDetails) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.company = company;
        this.userDetails = userDetails;
    }
}
