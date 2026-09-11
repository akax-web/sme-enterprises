package com.subramanienterprises.service;

import com.subramanienterprises.dto.ServiceDTO;
import com.subramanienterprises.exception.ResourceNotFoundException;
import com.subramanienterprises.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Business logic for the four core services (Acting Drivers,
 * Hourly Package, Monthly Package, All Model Cars).
 *
 * Named "ServiceCatalogService" (rather than "ServiceService")
 * to avoid confusion with Spring's own @Service annotation.
 */
@Service
public class ServiceCatalogService {

    private final ServiceRepository serviceRepository;

    @Autowired
    public ServiceCatalogService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public List<ServiceDTO> getAllActiveServices() {
        return serviceRepository.findByActiveTrueOrderByDisplayOrderAsc()
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public ServiceDTO getServiceById(Long id) {
        return serviceRepository.findById(id)
                .map(this::toDto)
                .orElseThrow(() -> new ResourceNotFoundException("Service not found with id: " + id));
    }

    private ServiceDTO toDto(com.subramanienterprises.model.Service service) {
        return new ServiceDTO(
                service.getId(),
                service.getName(),
                service.getShortDescription(),
                service.getButtonLabel(),
                service.getButtonAction()
        );
    }
}
