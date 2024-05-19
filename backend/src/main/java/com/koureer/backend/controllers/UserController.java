package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.UserDTO;
import com.koureer.backend.dto.UserUpdateDTO;
import com.koureer.backend.entities.User;
import com.koureer.backend.services.UserService;
import com.koureer.backend.shared.GenericMessage;

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
        return ResponseEntity.ok().body(new UserDTO(user));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.ok().body(new GenericMessage("User is deleted."));
    }

    @GetMapping("/list")
    Page<UserDTO> getUsers(Pageable page) {
        return userService.getUsers(page).map(UserDTO::new);
    }

    @GetMapping("/{id}")
    UserDTO getUserById(@PathVariable Long id) {
        return new UserDTO(userService.getUser(id));
    }
}
