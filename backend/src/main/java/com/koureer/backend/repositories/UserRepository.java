package com.koureer.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.koureer.backend.entities.User;

import jakarta.transaction.Transactional;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findById(long id);

    @Modifying
    @Transactional
    @Query("UPDATE User u SET u.userDetails = null WHERE u.userDetails.id = :userDetailsId")
    void unlinkUserDetails(Long userDetailsId);

    @Modifying
    @Transactional
    @Query("UPDATE User u SET u.company = null WHERE u.company.id = :companyId")
    void unlinkCompany(Long companyId);
}
