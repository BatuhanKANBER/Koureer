package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koureer.backend.entities.User;
import com.koureer.backend.entities.UserDetails;
import com.koureer.backend.repositories.UserDetailsRepository;
import com.koureer.backend.repositories.UserRepository;

@Service
public class UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    public UserDetails save(Long id, UserDetails userDetails) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found."));
        try {
            if (user.getRole() == "USER") {
                user.setUserDetails(userDetails);
                userDetailsRepository.save(userDetails);
                userRepository.save(user);
                return userDetails;
            } else {
                throw new RuntimeException("User hans't user role.");
            }
        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }
    }

}
