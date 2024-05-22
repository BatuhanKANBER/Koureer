package com.koureer.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koureer.backend.dto.AdvertCrudDTO;
import com.koureer.backend.dto.AdvertDTO;
import com.koureer.backend.entities.Advertisement;
import com.koureer.backend.services.AdvertService;
import com.koureer.backend.shared.GenericMessage;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/adverts")
public class AdvertController {
    @Autowired
    private AdvertService advertService;

    @PostMapping("/{id}/create")
    ResponseEntity<?> createAdvert(@Valid @PathVariable Long id,
            @RequestBody AdvertCrudDTO advertCrudDTO) {
        Advertisement advertisement = advertService.save(id, advertCrudDTO.toAdvertisement());
        return ResponseEntity.ok().body(new AdvertDTO(advertisement));
    }

    @PutMapping("/{id}/update")
    ResponseEntity<?> updateAdvert(@Valid @PathVariable Long id,
            @RequestBody AdvertCrudDTO advertCrudDTO) {
        Advertisement advertisement = advertService.update(id, advertCrudDTO);
        return ResponseEntity.ok().body(new AdvertDTO(advertisement));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteAdvert(@PathVariable Long id) {
        advertService.delete(id);
        return ResponseEntity.ok().body(new GenericMessage("Job advertisement is deleted."));
    }

    @GetMapping("/list")
    Page<AdvertDTO> getAdverts(Pageable page) {
        return advertService.getAdvertisements(page).map(AdvertDTO::new);
    }

    @GetMapping("/{id}")
    AdvertDTO getAdvertById(@PathVariable Long id) {
        return new AdvertDTO(advertService.getAdvert(id));
    }

    @GetMapping("/{id}/list")
    Page<AdvertDTO> getAdvertsForUser(@PathVariable Long id, Pageable page) {
        return advertService.getAdvertisementsForUser(id, page).map(AdvertDTO::new);
    }
}
