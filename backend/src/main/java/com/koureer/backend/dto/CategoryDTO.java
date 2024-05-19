package com.koureer.backend.dto;

import lombok.Data;

@Data
public class CategoryDTO {
    long id;
    String name;

    public CategoryDTO(long id, String name) {
        this.id = id;
        this.name = name;
    }
}
