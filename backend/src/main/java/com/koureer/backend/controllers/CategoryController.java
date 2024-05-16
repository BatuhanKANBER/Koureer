package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.CategoryCreate;
import com.koureer.backend.services.CategoryService;
import com.koureer.backend.shared.GenericMessage;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/create")
    ResponseEntity<?> createCategory(@RequestBody CategoryCreate categoryCreate) {
        categoryService.save(categoryCreate.toCategory());
        return ResponseEntity.ok().body(new GenericMessage("Category is created."));
    }
}
