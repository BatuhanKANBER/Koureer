package com.koureer.backend.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Entity
@Data
@Table(name = "users", uniqueConstraints = @UniqueConstraint(columnNames = { "email" }))
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    String name;

    String surname;

    String email;

    String password;

    String role;

    @OneToOne(cascade = CascadeType.ALL)
    Company company;

    @OneToOne(cascade = CascadeType.ALL)
    UserDetails userDetails;
}
