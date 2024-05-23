package com.koureer.backend.dto;

import com.koureer.backend.entities.Advertisement;
import com.koureer.backend.entities.Application;
import com.koureer.backend.entities.User;

import lombok.Data;

@Data
public class ApplicationDTO {
    long id;
    User user;
    Advertisement advertisement;

    public ApplicationDTO(Application application) {
        setId(application.getId());
        setUser(application.getUser());
        setAdvertisement(application.getAdvertisement());
    }
}
