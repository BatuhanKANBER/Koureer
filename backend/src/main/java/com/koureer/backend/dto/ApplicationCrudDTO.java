package com.koureer.backend.dto;

import com.koureer.backend.entities.Advertisement;
import com.koureer.backend.entities.Application;
import com.koureer.backend.entities.User;

public record ApplicationCrudDTO(

        User user,
        Advertisement advertisement) {

    public Application toApplication() {
        Application application = new Application();
        application.setUser(user);
        application.setAdvertisement(advertisement);
        return application;
    }
}
