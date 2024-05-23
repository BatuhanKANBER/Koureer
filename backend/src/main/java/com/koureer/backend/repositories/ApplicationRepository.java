package com.koureer.backend.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.koureer.backend.entities.Application;
import com.koureer.backend.entities.User;

import jakarta.transaction.Transactional;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    Page<Application> findByUser(User user, Pageable page);

    List<Application> findByAdvertisementId(Long advertisementId);

    @Modifying
    @Transactional
    @Query("DELETE FROM Application a WHERE a.advertisement.id = :advertId")
    void deleteByAdvertId(Long advertId);
}
