package com.subramanienterprises.service;

import com.subramanienterprises.dto.BusinessInfoDTO;
import com.subramanienterprises.exception.ResourceNotFoundException;
import com.subramanienterprises.model.BusinessInfo;
import com.subramanienterprises.repository.BusinessInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Business logic for retrieving business profile information.
 * There is only ever one business_info row for this site.
 */
@Service
public class BusinessInfoService {

    private final BusinessInfoRepository businessInfoRepository;

    @Autowired
    public BusinessInfoService(BusinessInfoRepository businessInfoRepository) {
        this.businessInfoRepository = businessInfoRepository;
    }

    public BusinessInfoDTO getBusinessInfo() {
        BusinessInfo info = businessInfoRepository.findAll()
                .stream()
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Business information not configured."));

        return toDto(info);
    }

    private BusinessInfoDTO toDto(BusinessInfo info) {
        return new BusinessInfoDTO(
                info.getBusinessName(),
                info.getProprietorName(),
                info.getTagline(),
                info.getPhone(),
                info.getWhatsapp(),
                info.getAddress(),
                info.getMapsUrl(),
                info.getUdyamEnterpriseType(),
                info.getUdyamMajorActivity()
        );
    }
}
