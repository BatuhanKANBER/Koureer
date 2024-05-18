package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.CompanyCreate;
import com.koureer.backend.services.CompanyService;
import com.koureer.backend.shared.GenericMessage;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @PostMapping("/{id}/create")
    ResponseEntity<?> createCompanies(@Valid @PathVariable Long id, @RequestBody CompanyCreate companyCreate) {
        companyService.save(id, companyCreate.toCompany());
        return ResponseEntity.ok().body(new GenericMessage("Company infos is created."));
    }
}
