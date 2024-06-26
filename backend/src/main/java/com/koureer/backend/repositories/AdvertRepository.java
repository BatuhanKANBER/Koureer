package com.koureer.backend.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.koureer.backend.entities.Advertisement;
import com.koureer.backend.entities.User;

import jakarta.transaction.Transactional;

public interface AdvertRepository extends JpaRepository<Advertisement, Long> {
    Page<Advertisement> findByUser(User user, Pageable page);

    @Modifying
    @Transactional
    @Query("DELETE FROM Advertisement a WHERE a.category.id = :categoryId")
    void deleteByCategoryId(Long categoryId);
}
