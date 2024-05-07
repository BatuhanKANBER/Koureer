package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.entities.Category;
import com.koureer.backend.services.CategoryService;
import com.koureer.backend.shared.GenericMessage;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @PostMapping("/create")
    GenericMessage createCategory(@RequestBody Category category) {
        categoryService.save(category);
        return new GenericMessage("Category is created.");
    }
}
