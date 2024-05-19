package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.UserDTO;
import com.koureer.backend.dto.UserUpdateDTO;
import com.koureer.backend.entities.User;
import com.koureer.backend.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    UserService userService;

    @PutMapping("/{id}/update")
    ResponseEntity<?> updateUser(@Valid @PathVariable Long id,
            @RequestBody UserUpdateDTO userUpdateDTO) {
        User user = userService.update(id, userUpdateDTO);
        return ResponseEntity.ok().body(new UserDTO(user.getId(), user.getName(), user.getSurname(), user.getEmail(),
                user.getRole(), user.getCompany(), user.getUserDetails()));
    }
}
