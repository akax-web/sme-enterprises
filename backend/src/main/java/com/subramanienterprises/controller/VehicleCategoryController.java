package com.subramanienterprises.controller;

import com.subramanienterprises.dto.VehicleCategoryDTO;
import com.subramanienterprises.service.VehicleCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Public, read-only endpoint for vehicle categories.
 * GET /api/vehicle-categories
 */
@RestController
@RequestMapping("/api/vehicle-categories")
public class VehicleCategoryController {

    private final VehicleCategoryService vehicleCategoryService;

    @Autowired
    public VehicleCategoryController(VehicleCategoryService vehicleCategoryService) {
        this.vehicleCategoryService = vehicleCategoryService;
    }

    @GetMapping
    public ResponseEntity<List<VehicleCategoryDTO>> getAllCategories() {
        return ResponseEntity.ok(vehicleCategoryService.getAllActiveCategories());
    }
}
