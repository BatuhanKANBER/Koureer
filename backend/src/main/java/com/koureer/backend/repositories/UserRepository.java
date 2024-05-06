package com.koureer.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.koureer.backend.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
