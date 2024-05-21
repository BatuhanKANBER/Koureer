package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.CategoryCrudDTO;
import com.koureer.backend.dto.CategoryDTO;
import com.koureer.backend.entities.Category;
import com.koureer.backend.services.CategoryService;
import com.koureer.backend.shared.GenericMessage;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/create")
    ResponseEntity<?> createCategory(@Valid @RequestBody CategoryCrudDTO categoryCrudDTO) {
        Category category = categoryService.save(categoryCrudDTO.toCategory());
        return ResponseEntity.ok().body(new CategoryDTO(category));
    }

    @PutMapping("/{id}/update")
    ResponseEntity<?> updateCategory(@Valid @PathVariable Long id, @RequestBody CategoryCrudDTO categoryCrudDTO) {
        Category category = categoryService.update(id, categoryCrudDTO);
        return ResponseEntity.ok().body(new CategoryDTO(category));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        categoryService.delete(id);
        return ResponseEntity.ok().body(new GenericMessage("Category is deleted."));
    }

    @GetMapping("/list")
    Page<CategoryDTO> getCategories(Pageable page) {
        return categoryService.getCategories(page).map(CategoryDTO::new);
    }

    @GetMapping("/{id}")
    CategoryDTO getCategoryById(@PathVariable Long id) {
        return new CategoryDTO(categoryService.getCategory(id));
    }
}
