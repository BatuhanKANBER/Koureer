package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koureer.backend.entities.Category;
import com.koureer.backend.repositories.CategoryRepository;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public void save(Category category) {
        try {
            categoryRepository.save(category);
        } catch (Exception exception) {
            System.out.println(exception);
        }

    }

}
