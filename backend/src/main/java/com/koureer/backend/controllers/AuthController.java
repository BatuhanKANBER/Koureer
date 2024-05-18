package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.Credentials;
import com.koureer.backend.dto.UserCreate;
import com.koureer.backend.dto.UserDTO;
import com.koureer.backend.entities.User;
import com.koureer.backend.services.AuthService;
import com.koureer.backend.shared.GenericMessage;

import jakarta.validation.Valid;

@RequestMapping("/api/auth")
@RestController
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    ResponseEntity<?> login(@RequestBody Credentials credentials) {
        User user = authService.login(credentials);
        return ResponseEntity.ok()
                .body(new UserDTO(user.getId(), user.getName(), user.getSurname(), user.getEmail(), user.getRole(),
                        user.getCompany(), user.getUserDetails()));
    }

    @PostMapping("/register")
    ResponseEntity<GenericMessage> createUser(@Valid @RequestBody UserCreate user) {
        authService.save(user.toUser());
        return ResponseEntity.ok().body(new GenericMessage("User is created."));
    }
}
