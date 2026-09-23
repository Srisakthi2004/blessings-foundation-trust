package com.blessings.foundation.service;

import com.blessings.foundation.model.Volunteer;
import com.blessings.foundation.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Layer for Volunteer business logic
 */
@Service
public class VolunteerService {

    private final VolunteerRepository volunteerRepository;

    @Autowired
    public VolunteerService(VolunteerRepository volunteerRepository) {
        this.volunteerRepository = volunteerRepository;
    }

    public Volunteer registerVolunteer(Volunteer volunteer) {
        // Business logic / validation sanitization
        if (volunteer.getName() != null) {
            volunteer.setName(volunteer.getName().trim());
        }
        if (volunteer.getEmail() != null) {
            volunteer.setEmail(volunteer.getEmail().trim().toLowerCase());
        }
        return volunteerRepository.save(volunteer);
    }

    public List<Volunteer> getAllVolunteers() {
        return volunteerRepository.findAll();
    }
}
