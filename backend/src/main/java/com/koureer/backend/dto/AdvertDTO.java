package com.koureer.backend.dto;

import com.koureer.backend.entities.Advertisement;
import com.koureer.backend.entities.Category;
import com.koureer.backend.entities.User;

import lombok.Data;

@Data
public class AdvertDTO {
    long id;
    String tittle;
    String position;
    String department;
    String description;
    Category category;
    User user;

    public AdvertDTO(Advertisement advertisement) {
        setId(advertisement.getId());
        setTittle(advertisement.getTittle());
        setPosition(advertisement.getPosition());
        setDepartment(advertisement.getDepartment());
        setDescription(advertisement.getDescription());
        setCategory(advertisement.getCategory());
        setUser(advertisement.getUser());
    }
}
