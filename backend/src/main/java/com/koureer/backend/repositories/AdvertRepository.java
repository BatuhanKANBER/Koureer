package com.koureer.backend.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.koureer.backend.entities.Advertisement;
import com.koureer.backend.entities.User;

public interface AdvertRepository extends JpaRepository<Advertisement, Long> {
    Page<Advertisement> findByUser(User user, Pageable page);

}
