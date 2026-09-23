package com.blessings.foundation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Entry Point for Blessings Foundation & Trust Spring Boot Backend.
 * Runs on http://localhost:8080
 */
@SpringBootApplication
public class BlessingsFoundationApplication {

    public static void main(String[] args) {
        SpringApplication.run(BlessingsFoundationApplication.class, args);
        System.out.println("=================================================================");
        System.out.println(" Blessings Foundation & Trust Backend Started Successfully!      ");
        System.out.println(" REST API Base URL: http://localhost:8080/api                     ");
        System.out.println("=================================================================");
    }
}
