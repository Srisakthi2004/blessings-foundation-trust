package com.blessings.foundation.service;

import com.blessings.foundation.model.Event;
import com.blessings.foundation.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Layer for Events
 */
@Service
public class EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public void addEvent(Event event) {
        eventRepository.save(event);
    }
}
