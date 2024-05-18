package com.koureer.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.koureer.backend.entities.UserDetails;

public interface UserDetailsRepository extends JpaRepository<UserDetails, Long> {

}
