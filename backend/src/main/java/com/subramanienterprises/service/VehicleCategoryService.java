package com.subramanienterprises.service;

import com.subramanienterprises.dto.VehicleCategoryDTO;
import com.subramanienterprises.model.VehicleCategory;
import com.subramanienterprises.repository.VehicleCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Business logic for Normal / Premium / Luxury vehicle categories.
 */
@Service
public class VehicleCategoryService {

    private final VehicleCategoryRepository vehicleCategoryRepository;

    @Autowired
    public VehicleCategoryService(VehicleCategoryRepository vehicleCategoryRepository) {
        this.vehicleCategoryRepository = vehicleCategoryRepository;
    }

    public List<VehicleCategoryDTO> getAllActiveCategories() {
        return vehicleCategoryRepository.findByActiveTrueOrderByDisplayOrderAsc()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    private VehicleCategoryDTO toDto(VehicleCategory category) {
        return new VehicleCategoryDTO(
                category.getId(),
                category.getCategoryName(),
                category.getDescription(),
                category.getPriceNote()
        );
    }
}
