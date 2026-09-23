package com.blessings.foundation.repository;

import com.blessings.foundation.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository for managing Events using JDBC / JdbcTemplate
 */
@Repository
public class EventRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public EventRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Event> rowMapper = (rs, rowNum) -> new Event(
            rs.getLong("id"),
            rs.getString("title"),
            rs.getString("event_date"),
            rs.getString("location"),
            rs.getString("description"),
            rs.getString("image_url")
    );

    /**
     * Fetch all events
     */
    public List<Event> findAll() {
        String sql = "SELECT id, title, event_date, location, description, image_url FROM events ORDER BY id ASC";
        return jdbcTemplate.query(sql, rowMapper);
    }

    /**
     * Insert an event
     */
    public int save(Event event) {
        String sql = "INSERT INTO events (title, event_date, location, description, image_url) VALUES (?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
                event.getTitle(),
                event.getEventDate(),
                event.getLocation(),
                event.getDescription(),
                event.getImageUrl()
        );
    }
}
