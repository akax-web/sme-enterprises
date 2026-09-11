package com.subramanienterprises.repository;

import com.subramanienterprises.model.VehicleCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Data access for the vehicle_categories table.
 */
public interface VehicleCategoryRepository extends JpaRepository<VehicleCategory, Long> {

    List<VehicleCategory> findByActiveTrueOrderByDisplayOrderAsc();
}
