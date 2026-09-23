package com.blessings.foundation.controller;

import com.blessings.foundation.model.ApiResponse;
import com.blessings.foundation.model.ContactMessage;
import com.blessings.foundation.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for Contact Message inquiries
 * Base path: /api/contact
 */
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    /**
     * POST /api/contact
     * Receives contact inquiry form from frontend
     */
    @PostMapping
    public ResponseEntity<ApiResponse> handleContactForm(@Valid @RequestBody ContactMessage contactMessage) {
        try {
            ContactMessage saved = contactService.processContactMessage(contactMessage);
            ApiResponse response = new ApiResponse(
                    true,
                    "Thank you! Your request has been submitted successfully.",
                    saved
            );
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception ex) {
            ApiResponse errorResponse = new ApiResponse(
                    false,
                    "Error submitting contact message: " + ex.getMessage(),
                    null
            );
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * GET /api/contact
     * Retrieve all messages
     */
    @GetMapping
    public ResponseEntity<List<ContactMessage>> getAllMessages() {
        return ResponseEntity.ok(contactService.getAllMessages());
    }
}
