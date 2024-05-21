package com.koureer.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "advertisements")
public class Advertisement {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long id;

    String tittle;

    String position;

    String department;

    String description;

    @ManyToOne
    Category category;

    @ManyToOne
    User user;
}
