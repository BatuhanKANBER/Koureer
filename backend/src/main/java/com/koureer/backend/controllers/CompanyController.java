package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.entities.Company;
import com.koureer.backend.services.CompanyService;
import com.koureer.backend.shared.GenericMessage;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {
    @Autowired
    CompanyService companyService;

    @GetMapping("/home")
    GenericMessage userHome() {
        return new GenericMessage("Company home.");
    }

    @PostMapping("/create")
    GenericMessage createCompany(@RequestBody Company company) {
        companyService.save(company);
        return new GenericMessage("Company is created.");
    }
}
