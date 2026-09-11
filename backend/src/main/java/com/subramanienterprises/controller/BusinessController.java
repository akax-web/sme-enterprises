package com.subramanienterprises.controller;

import com.subramanienterprises.dto.BusinessInfoDTO;
import com.subramanienterprises.service.BusinessInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Public, read-only endpoint for business profile information.
 * No authentication required - this is a public marketing site.
 */
@RestController
@RequestMapping("/api/business")
public class BusinessController {

    private final BusinessInfoService businessInfoService;

    @Autowired
    public BusinessController(BusinessInfoService businessInfoService) {
        this.businessInfoService = businessInfoService;
    }

    @GetMapping
    public ResponseEntity<BusinessInfoDTO> getBusinessInfo() {
        return ResponseEntity.ok(businessInfoService.getBusinessInfo());
    }
}
