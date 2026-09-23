package com.blessings.foundation.service;

import com.blessings.foundation.model.Program;
import com.blessings.foundation.repository.ProgramRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service Layer for Programs
 */
@Service
public class ProgramService {

    private final ProgramRepository programRepository;

    @Autowired
    public ProgramService(ProgramRepository programRepository) {
        this.programRepository = programRepository;
    }

    public List<Program> getAllPrograms() {
        return programRepository.findAll();
    }

    public void addProgram(Program program) {
        programRepository.save(program);
    }
}
