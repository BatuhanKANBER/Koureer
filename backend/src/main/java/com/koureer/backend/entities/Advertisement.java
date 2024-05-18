package com.koureer.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
@Table(name = "advertisements")
public class Advertisement {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long id;

    @NotBlank
    @Size(min = 4, max = 30)
    String tittle;

    @NotBlank
    @Size(min = 2, max = 30)
    String position;

    @NotBlank
    @Size(min = 4, max = 30)
    String department;

    @NotBlank
    @Size(min = 30, max = 500)
    String description;

    @ManyToOne
    Company company;

    @ManyToOne
    Category category;
}
