package com.blessings.foundation.repository;

import com.blessings.foundation.model.Program;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository for managing Programs using JDBC / JdbcTemplate
 */
@Repository
public class ProgramRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ProgramRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Program> rowMapper = (rs, rowNum) -> new Program(
            rs.getLong("id"),
            rs.getString("title"),
            rs.getString("description"),
            rs.getString("image_url")
    );

    /**
     * Fetch all programs
     */
    public List<Program> findAll() {
        String sql = "SELECT id, title, description, image_url FROM programs ORDER BY id ASC";
        return jdbcTemplate.query(sql, rowMapper);
    }

    /**
     * Insert a program
     */
    public int save(Program program) {
        String sql = "INSERT INTO programs (title, description, image_url) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql,
                program.getTitle(),
                program.getDescription(),
                program.getImageUrl()
        );
    }
}
