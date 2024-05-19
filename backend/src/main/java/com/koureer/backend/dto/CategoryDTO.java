package com.koureer.backend.dto;

import com.koureer.backend.entities.Category;

import lombok.Data;

@Data
public class CategoryDTO {
    long id;
    String name;

    public CategoryDTO(Category category) {
        setId(category.getId());
        setName(category.getName());
    }
}
