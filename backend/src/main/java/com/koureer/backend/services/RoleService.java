package com.koureer.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koureer.backend.entities.Role;
import com.koureer.backend.repositories.RoleRepository;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public void save(Role role) {
        try {
            roleRepository.save(role);
        } catch (Exception exception) {
            System.out.println(exception);
        }
    }

}
