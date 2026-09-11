package com.subramanienterprises.repository;

import com.subramanienterprises.model.BusinessInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Data access for the business_info table.
 * Spring Data JPA generates the implementation automatically.
 */
public interface BusinessInfoRepository extends JpaRepository<BusinessInfo, Long> {
}
