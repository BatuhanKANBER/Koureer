package com.koureer.backend.dto;

import com.koureer.backend.entities.Company;
import com.koureer.backend.entities.User;
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

    public UserDTO(User user) {
        setId(user.getId());
        setName(user.getName());
        setSurname(user.getSurname());
        setEmail(user.getEmail());
        setRole(user.getRole());
        setCompany(user.getCompany());
        setUserDetails(user.getUserDetails());
    }
}
