package com.subramanienterprises.model;

import jakarta.persistence.*;

/**
 * Maps to the business_info table.
 * Holds the single business profile record used across the site
 * (name, proprietor, contact details, Udyam registration info).
 */
@Entity
@Table(name = "business_info")
public class BusinessInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "business_name", nullable = false, length = 150)
    private String businessName;

    @Column(name = "proprietor_name", nullable = false, length = 150)
    private String proprietorName;

    @Column(name = "tagline", length = 255)
    private String tagline;

    @Column(name = "phone", length = 20)
    private String phone;

    @Column(name = "whatsapp", length = 20)
    private String whatsapp;

    @Column(name = "address", length = 500)
    private String address;

    @Column(name = "maps_url", length = 500)
    private String mapsUrl;

    @Column(name = "udyam_enterprise_type", length = 50)
    private String udyamEnterpriseType;

    @Column(name = "udyam_major_activity", length = 100)
    private String udyamMajorActivity;

    public BusinessInfo() {
    }

    // ---------- Getters and Setters ----------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getProprietorName() {
        return proprietorName;
    }

    public void setProprietorName(String proprietorName) {
        this.proprietorName = proprietorName;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWhatsapp() {
        return whatsapp;
    }

    public void setWhatsapp(String whatsapp) {
        this.whatsapp = whatsapp;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMapsUrl() {
        return mapsUrl;
    }

    public void setMapsUrl(String mapsUrl) {
        this.mapsUrl = mapsUrl;
    }

    public String getUdyamEnterpriseType() {
        return udyamEnterpriseType;
    }

    public void setUdyamEnterpriseType(String udyamEnterpriseType) {
        this.udyamEnterpriseType = udyamEnterpriseType;
    }

    public String getUdyamMajorActivity() {
        return udyamMajorActivity;
    }

    public void setUdyamMajorActivity(String udyamMajorActivity) {
        this.udyamMajorActivity = udyamMajorActivity;
    }
}
