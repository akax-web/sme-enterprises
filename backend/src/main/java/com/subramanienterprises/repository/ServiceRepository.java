package com.subramanienterprises.repository;

import com.subramanienterprises.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Data access for the services table.
 */
public interface ServiceRepository extends JpaRepository<Service, Long> {

    List<Service> findByActiveTrueOrderByDisplayOrderAsc();
}
