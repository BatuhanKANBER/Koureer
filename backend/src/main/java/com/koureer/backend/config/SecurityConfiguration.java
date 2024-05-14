package com.koureer.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractAuthenticationFilterConfigurer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.koureer.backend.services.CustomUserDetailService;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration {
    @Autowired
    CustomUserDetailService customUserDetailService;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                        (registry) -> {
                            // registry.requestMatchers(
                            //         AntPathRequestMatcher.antMatcher(HttpMethod.GET, "/api/users/home"))
                            //         .authenticated();
                            registry.requestMatchers("/api/categories/**").hasRole("ADMIN");
                            registry.requestMatchers("/api/users/**").hasAnyRole("USER", "ADMIN");
                            registry.requestMatchers("/api/companies/**").hasAnyRole("COMPANY", "ADMIN");
                            registry.anyRequest().authenticated();
                        })
                .formLogin(AbstractAuthenticationFilterConfigurer::permitAll);
        httpSecurity.csrf((csrf) -> csrf.disable());
        httpSecurity.headers((headers) -> headers.disable());
        return httpSecurity.build();
    }

    @Bean
    UserDetailsService userDetailsService() {
        return customUserDetailService;
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService());
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }
}
