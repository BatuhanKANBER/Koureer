package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.koureer.backend.entities.Role;
import com.koureer.backend.entities.User;
import com.koureer.backend.repositories.RoleRepository;
import com.koureer.backend.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void save(User user) {
        Role roleInDB = roleRepository.findByname("user");
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole(roleInDB);
            userRepository.save(user);
        } catch (Exception exception) {
            System.out.println(exception);
        }
    }

}
