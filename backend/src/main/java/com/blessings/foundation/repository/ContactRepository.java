package com.blessings.foundation.repository;

import com.blessings.foundation.model.ContactMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

/**
 * Repository for managing Contact Messages using JDBC / JdbcTemplate
 */
@Repository
public class ContactRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ContactRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<ContactMessage> rowMapper = (rs, rowNum) -> new ContactMessage(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("email"),
            rs.getString("phone"),
            rs.getString("subject"),
            rs.getString("message"),
            rs.getTimestamp("created_at")
    );

    /**
     * Insert a new contact message into the MySQL database
     */
    public ContactMessage save(ContactMessage contact) {
        String sql = "INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, contact.getName());
            ps.setString(2, contact.getEmail());
            ps.setString(3, contact.getPhone());
            ps.setString(4, contact.getSubject());
            ps.setString(5, contact.getMessage());
            return ps;
        }, keyHolder);

        if (keyHolder.getKey() != null) {
            contact.setId(keyHolder.getKey().longValue());
        }
        return contact;
    }

    /**
     * Retrieve all messages ordered by submission date
     */
    public List<ContactMessage> findAll() {
        String sql = "SELECT id, name, email, phone, subject, message, created_at FROM contact_messages ORDER BY created_at DESC";
        return jdbcTemplate.query(sql, rowMapper);
    }
}
