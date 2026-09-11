package com.subramanienterprises;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Entry point for the Subramani Enterprises backend.
 *
 * This backend serves PUBLIC, read-only REST endpoints for the
 * driving services website (services, packages, vehicle categories,
 * business info). There is intentionally NO authentication, login,
 * or user account system anywhere in this application, because the
 * website is meant to be opened directly and publicly (e.g. via a
 * QR code scan).
 */
@SpringBootApplication
public class SubramaniEnterprisesApplication {

    public static void main(String[] args) {
        SpringApplication.run(SubramaniEnterprisesApplication.class, args);
    }
}
