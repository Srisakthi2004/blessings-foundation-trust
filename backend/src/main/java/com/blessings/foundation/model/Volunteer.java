package com.blessings.foundation.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.sql.Timestamp;

/**
 * Model representing a Volunteer Registration
 */
public class Volunteer {

    private Long id;

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Valid email address is required")
    private String email;

    @NotBlank(message = "Phone number is required")
    private String phone;

    private String address;
    private String interest;
    private String message;
    private Timestamp createdAt;

    // Default Constructor
    public Volunteer() {
    }

    // Parameterized Constructor
    public Volunteer(Long id, String name, String email, String phone, String address, String interest, String message, Timestamp createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.interest = interest;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getInterest() {
        return interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
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
