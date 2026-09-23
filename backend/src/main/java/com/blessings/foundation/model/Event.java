package com.blessings.foundation.model;

/**
 * Model representing a Community Event / Drive
 */
public class Event {

    private Long id;
    private String title;
    private String eventDate;
    private String location;
    private String description;
    private String imageUrl;

    public Event() {
    }

    public Event(Long id, String title, String eventDate, String location, String description, String imageUrl) {
        this.id = id;
        this.title = title;
        this.eventDate = eventDate;
        this.location = location;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getEventDate() {
        return eventDate;
    }

    public void setEventDate(String eventDate) {
        this.eventDate = eventDate;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
