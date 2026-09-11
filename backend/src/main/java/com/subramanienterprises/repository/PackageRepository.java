package com.subramanienterprises.repository;

import com.subramanienterprises.model.Package;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Data access for the packages table.
 */
public interface PackageRepository extends JpaRepository<Package, Long> {

    List<Package> findByPackageTypeAndActiveTrueOrderByDisplayOrderAsc(String packageType);
}
