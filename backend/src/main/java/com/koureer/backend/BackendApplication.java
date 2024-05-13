package com.koureer.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.koureer.backend.entities.User;
import com.koureer.backend.repositories.UserRepository;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		System.out.println("BAŞLADIIIIIIIII");
	}

	@Bean
	CommandLineRunner createUser(UserRepository userRepository) {
		return (args) -> {
			PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			User normalUser = new User();
			normalUser.setName("Batuhan");
			normalUser.setSurname("KANBER");
			normalUser.setEmail("batuhan@gmail.com");
			normalUser.setPassword(passwordEncoder.encode("1234"));
			normalUser.setRole("USER");
			userRepository.save(normalUser);

			User admin = new User();
			admin.setName("Batuhan");
			admin.setSurname("KANBER");
			admin.setEmail("admin@gmail.com");
			admin.setPassword(passwordEncoder.encode("1234"));
			admin.setRole("ADMIN");
			userRepository.save(admin);

			User company = new User();
			company.setName("Batuhan");
			company.setSurname("KANBER");
			company.setEmail("company@gmail.com");
			company.setPassword(passwordEncoder.encode("1234"));
			company.setRole("COMPANY");
			userRepository.save(company);
		};
	}

}
