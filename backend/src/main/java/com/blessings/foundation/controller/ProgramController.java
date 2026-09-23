package com.blessings.foundation.controller;

import com.blessings.foundation.model.ApiResponse;
import com.blessings.foundation.model.Program;
import com.blessings.foundation.service.ProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for Programs
 * Base path: /api/programs
 */
@RestController
@RequestMapping("/api/programs")
@CrossOrigin(origins = "*")
public class ProgramController {

    private final ProgramService programService;

    @Autowired
    public ProgramController(ProgramService programService) {
        this.programService = programService;
    }

    /**
     * GET /api/programs
     * Retrieve list of all foundation programs
     */
    @GetMapping
    public ResponseEntity<List<Program>> getPrograms() {
        List<Program> programs = programService.getAllPrograms();
        return ResponseEntity.ok(programs);
    }

    /**
     * POST /api/programs
     * Create a program (admin helper)
     */
    @PostMapping
    public ResponseEntity<ApiResponse> createProgram(@RequestBody Program program) {
        try {
            programService.addProgram(program);
            return new ResponseEntity<>(new ApiResponse(true, "Program created successfully", program), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(new ApiResponse(false, "Failed to create program: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
