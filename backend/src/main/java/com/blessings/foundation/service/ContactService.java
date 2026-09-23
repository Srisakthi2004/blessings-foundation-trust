package com.blessings.foundation.service;

import com.blessings.foundation.model.ContactMessage;
import com.blessings.foundation.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Layer for Contact Messages
 */
@Service
public class ContactService {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactMessage processContactMessage(ContactMessage message) {
        if (message.getName() != null) {
            message.setName(message.getName().trim());
        }
        if (message.getEmail() != null) {
            message.setEmail(message.getEmail().trim().toLowerCase());
        }
        return contactRepository.save(message);
    }

    public List<ContactMessage> getAllMessages() {
        return contactRepository.findAll();
    }
}
