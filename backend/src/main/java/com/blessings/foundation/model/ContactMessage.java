package com.blessings.foundation.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.sql.Timestamp;

/**
 * Model representing a Contact Inquiry Message
 */
public class ContactMessage {

    private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Valid email address is required")
    private String email;

    private String phone;

    @NotBlank(message = "Subject is required")
    private String subject;

    @NotBlank(message = "Message cannot be empty")
    private String message;

    private Timestamp createdAt;

    // Default Constructor
    public ContactMessage() {
    }

    // Parameterized Constructor
    public ContactMessage(Long id, String name, String email, String phone, String subject, String message, Timestamp createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.subject = subject;
        this.message = message;
        this.createdAt = createdAt;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }
}
