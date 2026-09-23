package com.blessings.foundation.controller;

import com.blessings.foundation.model.ApiResponse;
import com.blessings.foundation.model.Volunteer;
import com.blessings.foundation.service.VolunteerService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for Volunteer endpoints
 * Base path: /api/volunteers
 */
@RestController
@RequestMapping("/api/volunteers")
@CrossOrigin(origins = "*")
public class VolunteerController {

    private final VolunteerService volunteerService;

    @Autowired
    public VolunteerController(VolunteerService volunteerService) {
        this.volunteerService = volunteerService;
    }

    /**
     * POST /api/volunteers
     * Accepts volunteer registration from frontend form
     */
    @PostMapping
    public ResponseEntity<ApiResponse> registerVolunteer(@Valid @RequestBody Volunteer volunteer) {
        try {
            Volunteer saved = volunteerService.registerVolunteer(volunteer);
            ApiResponse response = new ApiResponse(
                    true,
                    "Thank you! Your request has been submitted successfully.",
                    saved
            );
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception ex) {
            ApiResponse errorResponse = new ApiResponse(
                    false,
                    "Error saving volunteer registration: " + ex.getMessage(),
                    null
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * GET /api/volunteers
     * List all registered volunteers
     */
    @GetMapping
    public ResponseEntity<List<Volunteer>> getAllVolunteers() {
        return ResponseEntity.ok(volunteerService.getAllVolunteers());
    }
}
