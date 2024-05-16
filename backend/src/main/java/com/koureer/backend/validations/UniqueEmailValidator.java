package com.koureer.backend.validations;

import org.springframework.beans.factory.annotation.Autowired;

import com.koureer.backend.entities.User;
import com.koureer.backend.repositories.UserRepository;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {

        User inDB = userRepository.findByEmail(email);
        return inDB == null;
    }
}
