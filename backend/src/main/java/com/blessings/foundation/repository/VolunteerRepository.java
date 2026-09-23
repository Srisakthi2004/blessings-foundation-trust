package com.blessings.foundation.repository;

import com.blessings.foundation.model.Volunteer;
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
 * Repository for managing Volunteer records using JDBC / JdbcTemplate
 */
@Repository
public class VolunteerRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public VolunteerRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Volunteer> rowMapper = (rs, rowNum) -> new Volunteer(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("email"),
            rs.getString("phone"),
            rs.getString("address"),
            rs.getString("interest"),
            rs.getString("message"),
            rs.getTimestamp("created_at")
    );

    /**
     * Insert a new volunteer record into the MySQL database
     */
    public Volunteer save(Volunteer volunteer) {
        String sql = "INSERT INTO volunteers (name, email, phone, address, interest, message) VALUES (?, ?, ?, ?, ?, ?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, volunteer.getName());
            ps.setString(2, volunteer.getEmail());
            ps.setString(3, volunteer.getPhone());
            ps.setString(4, volunteer.getAddress());
            ps.setString(5, volunteer.getInterest());
            ps.setString(6, volunteer.getMessage());
            return ps;
        }, keyHolder);

        if (keyHolder.getKey() != null) {
            volunteer.setId(keyHolder.getKey().longValue());
        }
        return volunteer;
    }

    /**
     * Retrieve all volunteers ordered by most recent
     */
    public List<Volunteer> findAll() {
        String sql = "SELECT id, name, email, phone, address, interest, message, created_at FROM volunteers ORDER BY created_at DESC";
        return jdbcTemplate.query(sql, rowMapper);
    }
}
