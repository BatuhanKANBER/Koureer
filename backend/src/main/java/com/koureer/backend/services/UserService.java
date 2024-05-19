package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koureer.backend.dto.UserUpdateDTO;
import com.koureer.backend.entities.User;
import com.koureer.backend.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User update(Long id, UserUpdateDTO userUpdateDTO) {
        return userRepository.findById(id).map(existingUser -> {
            existingUser.setName(userUpdateDTO.name());
            existingUser.setSurname(userUpdateDTO.surname());
            existingUser.setEmail(userUpdateDTO.email());
            return userRepository.save(existingUser);
        }).orElseThrow(() -> new RuntimeException("User not found."));
    }

}
