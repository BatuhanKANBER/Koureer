package com.koureer.backend.dto;

import com.koureer.backend.entities.Advertisement;
import com.koureer.backend.entities.Category;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record AdvertCrudDTO(

        @NotBlank @Size(min = 4, max = 30) String tittle,

        @NotBlank @Size(min = 2, max = 30) String position,

        @NotBlank @Size(min = 4, max = 30) String department,

        @NotBlank @Size(min = 30, max = 500) String description,

        Category category) {

    public Advertisement toAdvertisement() {
        Advertisement advertisement = new Advertisement();
        advertisement.setTittle(tittle);
        advertisement.setPosition(position);
        advertisement.setDepartment(department);
        advertisement.setDescription(description);
        advertisement.setCategory(category);
        return advertisement;
    }
}
