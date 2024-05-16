package com.koureer.backend.validations;

import org.springframework.beans.factory.annotation.Autowired;

import com.koureer.backend.entities.Category;
import com.koureer.backend.repositories.CategoryRepository;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UniqueCategoryValidator implements ConstraintValidator<UniqueEmail, String> {

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public boolean isValid(String name, ConstraintValidatorContext context) {

        Category inDB = categoryRepository.findByName(name);
        return inDB == null;
    }
}
