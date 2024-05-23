package com.koureer.backend.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.koureer.backend.entities.Application;
import com.koureer.backend.entities.User;
import com.koureer.backend.repositories.ApplicationRepository;
import com.koureer.backend.repositories.UserRepository;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    public Application save(Long id, Application application) {
        List<Application> listApplications = new ArrayList<>();
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found."));
        try {
            if (user.getRole().equals("USER")) {
                application.setUser(user);
                listApplications.add(application);
                user.setApplications(listApplications);
                applicationRepository.save(application);
                userRepository.save(user);
                return application;
            } else {
                throw new RuntimeException("User hasn't user role.");
            }
        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }

    }

    public Page<Application> getApplicationsForUser(Long id, Pageable page) {
        User user = userService.getUser(id);
        return applicationRepository.findByUser(user, page);
    }

    public List<User> getUsersByAdvertisementId(Long advertisementId) {
        List<Application> applications = applicationRepository.findByAdvertisementId(advertisementId);
        return applications.stream()
                .map(Application::getUser)
                .collect(Collectors.toList());
    }

}
