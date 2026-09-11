package com.subramanienterprises.controller;

import com.subramanienterprises.dto.PackageDTO;
import com.subramanienterprises.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Public, read-only endpoints for hourly and monthly packages.
 * GET /api/packages
 * GET /api/packages/hourly
 * GET /api/packages/monthly
 */
@RestController
@RequestMapping("/api/packages")
public class PackageController {

    private final PackageService packageService;

    @Autowired
    public PackageController(PackageService packageService) {
        this.packageService = packageService;
    }

    @GetMapping
    public ResponseEntity<List<PackageDTO>> getAllPackages() {
        return ResponseEntity.ok(packageService.getAllPackages());
    }

    @GetMapping("/hourly")
    public ResponseEntity<List<PackageDTO>> getHourlyPackages() {
        return ResponseEntity.ok(packageService.getHourlyPackages());
    }

    @GetMapping("/monthly")
    public ResponseEntity<List<PackageDTO>> getMonthlyPackages() {
        return ResponseEntity.ok(packageService.getMonthlyPackages());
    }
}
