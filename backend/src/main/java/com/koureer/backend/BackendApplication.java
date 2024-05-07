package com.koureer.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.koureer.backend.entities.Admin;
import com.koureer.backend.entities.Role;
import com.koureer.backend.repositories.AdminRepository;
import com.koureer.backend.repositories.RoleRepository;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		System.out.println("BAŞLADIIIIIIIII");
	}

	@Bean
	CommandLineRunner roles(RoleRepository roleRepository, AdminRepository adminRepository) {
		return (args) -> {
			var roleInDB = roleRepository.count();
			PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			if (roleInDB != 0) {
				return;
			}
			Role role1 = new Role();
			role1.setName("admin");
			roleRepository.save(role1);
			Role role2 = new Role();
			role2.setName("company");
			roleRepository.save(role2);
			Role role3 = new Role();
			role3.setName("user");
			roleRepository.save(role3);
			Admin admin = new Admin();
			admin.setRole(role1);
			admin.setUsername("Admin");
			admin.setEmail("admin@gmail.com");
			admin.setPassword(passwordEncoder.encode("Admin123"));
			adminRepository.save(admin);
		};
	}

}
