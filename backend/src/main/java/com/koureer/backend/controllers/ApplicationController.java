package com.koureer.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.ApplicationCrudDTO;
import com.koureer.backend.dto.ApplicationDTO;
import com.koureer.backend.entities.Application;
import com.koureer.backend.entities.User;
import com.koureer.backend.services.ApplicationService;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;

    @PostMapping("/{id}/create")
    ResponseEntity<?> createApply(@PathVariable Long id,
            @RequestBody ApplicationCrudDTO applicationCrudDTO) {
        Application application = applicationService.save(id, applicationCrudDTO.toApplication());
        return ResponseEntity.ok().body(new ApplicationDTO(application));
    }

    @GetMapping("/{id}/list")
    Page<ApplicationDTO> getApplysForUser(@PathVariable Long id, Pageable page) {
        return applicationService.getApplicationsForUser(id, page).map(ApplicationDTO::new);
    }

    @GetMapping("/advertisement/{advertisementId}/users")
    public ResponseEntity<List<User>> getUsersByAdvertisement(@PathVariable Long advertisementId) {
        List<User> users = applicationService.getUsersByAdvertisementId(advertisementId);
        return ResponseEntity.ok(users);
    }
}
