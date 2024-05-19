package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koureer.backend.entities.Category;
import com.koureer.backend.exeptions.UniqueCategoryException;
import com.koureer.backend.repositories.CategoryRepository;

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

}
