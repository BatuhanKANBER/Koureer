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

import com.koureer.backend.dto.CompanyCrudDTO;
import com.koureer.backend.dto.CompanyDTO;
import com.koureer.backend.entities.Company;
import com.koureer.backend.services.CompanyService;
import com.koureer.backend.shared.GenericMessage;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @PostMapping("/{id}/create")
    ResponseEntity<?> createCompanies(@Valid @PathVariable Long id, @RequestBody CompanyCrudDTO companyCrudDTO) {
        Company company = companyService.save(id, companyCrudDTO.toCompany());
        return ResponseEntity.ok().body(new CompanyDTO(company));
    }

    @PutMapping("/{id}/update")
    ResponseEntity<?> updateCompany(@Valid @PathVariable Long id, @RequestBody CompanyCrudDTO companyCrudDTO) {
        Company company = companyService.update(id, companyCrudDTO);
        return ResponseEntity.ok().body(new CompanyDTO(company));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteCompany(@PathVariable Long id) {
        companyService.delete(id);
        return ResponseEntity.ok().body(new GenericMessage("Company is deleted."));
    }
}
