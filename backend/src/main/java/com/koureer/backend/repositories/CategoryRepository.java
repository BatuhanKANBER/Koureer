package com.koureer.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.koureer.backend.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByName(String name);
}
