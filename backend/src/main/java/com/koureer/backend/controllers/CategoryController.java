package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.CategoryCrudDTO;
import com.koureer.backend.dto.CategoryDTO;
import com.koureer.backend.entities.Category;
import com.koureer.backend.services.CategoryService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/create")
    ResponseEntity<?> createCategory(@Valid @RequestBody CategoryCrudDTO categoryCrudDTO) {
        Category category = categoryService.save(categoryCrudDTO.toCategory());
        return ResponseEntity.ok().body(new CategoryDTO(category.getId(), category.getName()));
    }
}
