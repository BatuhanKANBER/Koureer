package com.koureer.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.koureer.backend.dto.CategoryCrudDTO;
import com.koureer.backend.entities.Category;
import com.koureer.backend.exeptions.UniqueCategoryException;
import com.koureer.backend.repositories.CategoryRepository;

import jakarta.transaction.Transactional;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category save(Category category) {
        try {
            categoryRepository.save(category);
            return category;
        } catch (UniqueCategoryException exception) {
            throw new UniqueCategoryException();
        }

    }

    public Category update(Long id, CategoryCrudDTO categoryCrudDTO) {
        return categoryRepository.findById(id).map(existingCategory -> {
            existingCategory.setName(categoryCrudDTO.name());
            return categoryRepository.save(existingCategory);
        })
                .orElseThrow(() -> new RuntimeException("Category not found."));
    }

    @Transactional
    public void delete(Long id) {
        if (categoryRepository.existsById(id)) {
            categoryRepository.deleteById(id);
        } else {
            throw new RuntimeException("Category not found.");
        }
    }

    public Page<Category> getCategories(Pageable page) {
        return categoryRepository.findAll(page);
    }

    public Category getCategory(Long id) {
        return categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found."));
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

}
