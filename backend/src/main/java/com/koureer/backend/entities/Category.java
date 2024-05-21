package com.koureer.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Entity
@Data
@Table(name = "categories", uniqueConstraints = @UniqueConstraint(columnNames = { "name" }))
public class Category {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long id;

    String name;
}
