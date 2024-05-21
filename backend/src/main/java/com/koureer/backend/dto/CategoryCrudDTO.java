package com.koureer.backend.dto;

import com.koureer.backend.entities.Category;
import com.koureer.backend.validations.UniqueCategory;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CategoryCrudDTO(

        @UniqueCategory @NotBlank @NotNull @Size(min = 2) String name) {

    public Category toCategory() {
        Category category = new Category();
        category.setName(name);
        return category;
    }
}