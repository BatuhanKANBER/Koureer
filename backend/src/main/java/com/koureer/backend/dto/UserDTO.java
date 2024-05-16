package com.koureer.backend.dto;

import lombok.Data;

@Data
public class UserDTO {
    long id;
    String name;
    String surname;
    String email;
    String role;

    public UserDTO(long id, String name, String surname, String email, String role) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
    }
}
