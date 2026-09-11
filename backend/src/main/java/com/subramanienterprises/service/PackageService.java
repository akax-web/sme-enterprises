package com.subramanienterprises.service;

import com.subramanienterprises.dto.PackageDTO;
import com.subramanienterprises.model.Package;
import com.subramanienterprises.repository.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Business logic for Hourly and Monthly package data.
 * Prices are returned exactly as stored - no calculation or
 * interpretation of price components happens here.
 */
@Service
public class PackageService {

    private static final String HOURLY = "HOURLY";
    private static final String MONTHLY = "MONTHLY";

    private final PackageRepository packageRepository;

    @Autowired
    public PackageService(PackageRepository packageRepository) {
        this.packageRepository = packageRepository;
    }

    public List<PackageDTO> getAllPackages() {
        return packageRepository.findAll()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<PackageDTO> getHourlyPackages() {
        return packageRepository.findByPackageTypeAndActiveTrueOrderByDisplayOrderAsc(HOURLY)
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public List<PackageDTO> getMonthlyPackages() {
        return packageRepository.findByPackageTypeAndActiveTrueOrderByDisplayOrderAsc(MONTHLY)
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private PackageDTO toDto(Package pkg) {
        return new PackageDTO(
                pkg.getId(),
                pkg.getPackageType(),
                pkg.getName(),
                pkg.getTiming(),
                pkg.getPriceDetails(),
                pkg.getPriceLabel(),
                pkg.getNotes()
        );
    }
}
