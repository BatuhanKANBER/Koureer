package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.UserDetailsCrudDTO;
import com.koureer.backend.dto.UserDetailsDTO;
import com.koureer.backend.entities.UserDetails;
import com.koureer.backend.services.UserDetailsService;
import com.koureer.backend.shared.GenericMessage;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/user_details")
public class UserDetailsController {
    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/{id}/create")
    ResponseEntity<?> createUserDetails(@Valid @PathVariable Long id,
            @RequestBody UserDetailsCrudDTO userDetailsCrudDTO) {
        UserDetails userDetails = userDetailsService.save(id, userDetailsCrudDTO.toUserDetails());
        return ResponseEntity.ok().body(new UserDetailsDTO(userDetails));
    }

    @PutMapping("/{id}/update")
    ResponseEntity<?> updateUserDetails(@Valid @PathVariable Long id,
            @RequestBody UserDetailsCrudDTO userDetailsCrudDTO) {
        UserDetails userDetails = userDetailsService.update(id, userDetailsCrudDTO);
        return ResponseEntity.ok().body(new UserDetailsDTO(userDetails));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteUserDetails(@PathVariable Long id) {
        userDetailsService.delete(id);
        return ResponseEntity.ok().body(new GenericMessage("User details is deleted."));
    }
}
