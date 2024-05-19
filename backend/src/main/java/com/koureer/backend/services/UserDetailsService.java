package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koureer.backend.dto.UserDetailsCrudDTO;
import com.koureer.backend.entities.User;
import com.koureer.backend.entities.UserDetails;
import com.koureer.backend.repositories.UserDetailsRepository;
import com.koureer.backend.repositories.UserRepository;

import jakarta.transaction.Transactional;

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

    public UserDetails update(Long id, UserDetailsCrudDTO userDetailsCrudDTO) {
        return userDetailsRepository.findById(id).map(existingUserDetails -> {
            existingUserDetails.setGender(userDetailsCrudDTO.gender());
            existingUserDetails.setPhoneNumber(userDetailsCrudDTO.phoneNumber());
            existingUserDetails.setCountry(userDetailsCrudDTO.country());
            existingUserDetails.setDescription(userDetailsCrudDTO.description());
            return userDetailsRepository.save(existingUserDetails);
        }).orElseThrow(() -> new RuntimeException("User details not found."));
    }

    @Transactional
    public void delete(Long id) {
        if (userDetailsRepository.existsById(id)) {
            userRepository.unlinkUserDetails(id);
            userDetailsRepository.deleteById(id);
        } else {
            throw new RuntimeException("User details not found.");
        }
    }

}
