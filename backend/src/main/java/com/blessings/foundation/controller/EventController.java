package com.blessings.foundation.controller;

import com.blessings.foundation.model.ApiResponse;
import com.blessings.foundation.model.Event;
import com.blessings.foundation.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for Events
 * Base path: /api/events
 */
@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "*")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    /**
     * GET /api/events
     * Retrieve list of all events
     */
    @GetMapping
    public ResponseEntity<List<Event>> getEvents() {
        List<Event> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

    /**
     * POST /api/events
     * Create an event (admin helper)
     */
    @PostMapping
    public ResponseEntity<ApiResponse> createEvent(@RequestBody Event event) {
        try {
            eventService.addEvent(event);
            return new ResponseEntity<>(new ApiResponse(true, "Event created successfully", event), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, "Failed to create event: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
