package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.koureer.backend.dto.Credentials;
import com.koureer.backend.entities.User;
import com.koureer.backend.exeptions.BadCredentialsException;
import com.koureer.backend.exeptions.UniqueEmailException;
import com.koureer.backend.repositories.UserRepository;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void save(User user) {
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            user.setRole("USER");
            userRepository.save(user);
        } catch (UniqueEmailException exception) {
            throw new UniqueEmailException();
        }
    }

    public User login(Credentials credentials) {
        User inDB = userRepository.findByEmail(credentials.email());
        if (inDB == null) {
            throw new BadCredentialsException();
        }
        if (!passwordEncoder.matches(credentials.password(), inDB.getPassword())) {
            throw new BadCredentialsException();
        }
        return inDB;
    }

}
