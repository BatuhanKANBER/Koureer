package com.koureer.backend.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.koureer.backend.dto.AdvertCrudDTO;
import com.koureer.backend.entities.Advertisement;
import com.koureer.backend.entities.Category;
import com.koureer.backend.entities.User;
import com.koureer.backend.repositories.AdvertRepository;
import com.koureer.backend.repositories.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class AdvertService {
    @Autowired
    private AdvertRepository advertRepository;

    @Autowired
    private UserRepository userRepository;

    public Advertisement save(Long id, Advertisement advertisement) {
        List<Advertisement> listAdvertisements = new ArrayList<>();
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found."));
        try {
            if (user.getRole().equals("COMPANY")) {
                advertisement.setUser(user);
                listAdvertisements.add(advertisement);
                user.setAdvertisements(listAdvertisements);
                advertRepository.save(advertisement);
                userRepository.save(user);
                return advertisement;
            } else {
                throw new RuntimeException("User hasn't company role.");
            }
        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }

    }

    public Advertisement update(Long id, AdvertCrudDTO advertCrudDTO) {

        return advertRepository.findById(id).map(existingAdvert -> {
            existingAdvert.setTittle(advertCrudDTO.tittle());
            existingAdvert.setDepartment(advertCrudDTO.department());
            existingAdvert.setDescription(advertCrudDTO.description());
            existingAdvert.setPosition(advertCrudDTO.position());
            Category currentCategory = existingAdvert.getCategory();
            existingAdvert.setCategory(advertCrudDTO.category());
            if (advertCrudDTO.category() == null) {
                existingAdvert.setCategory(currentCategory);
            }
            return advertRepository.save(existingAdvert);
        }).orElseThrow(() -> new RuntimeException("job advertisement not found."));
    }

    @Transactional
    public void delete(Long id) {
        if (advertRepository.existsById(id)) {
            advertRepository.deleteById(id);
        } else {
            throw new RuntimeException("Job advertisement not found.");
        }
    }

    public Page<Advertisement> getAdvertisements(Pageable page) {
        return advertRepository.findAll(page);
    }

    public Advertisement getAdvert(Long id) {
        return advertRepository.findById(id).orElseThrow(() -> new RuntimeException("Job advertisement not found."));
    }
}
