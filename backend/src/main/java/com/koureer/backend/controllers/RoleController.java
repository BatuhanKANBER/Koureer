package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.entities.Role;
import com.koureer.backend.services.RoleService;
import com.koureer.backend.shared.GenericMessage;

@RestController
@RequestMapping("/api/roles")
public class RoleController {

    @Autowired
    RoleService roleService;

    @PostMapping("/create")
    GenericMessage createRole(@RequestBody Role role) {
        roleService.save(role);
        return new GenericMessage("Role is created.");
    }
}
