package com.koureer.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "categories", uniqueConstraints = @UniqueConstraint(columnNames = { "name" }))
public class Category {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long id;

    @Size(min = 2)
    String name;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
