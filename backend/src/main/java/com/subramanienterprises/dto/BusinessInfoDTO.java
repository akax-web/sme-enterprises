package com.subramanienterprises.dto;

/**
 * Response shape for GET /api/business.
 * Keeps the API contract stable even if the entity changes.
 */
public class BusinessInfoDTO {

    private String businessName;
    private String proprietorName;
    private String tagline;
    private String phone;
    private String whatsapp;
    private String address;
    private String mapsUrl;
    private String udyamEnterpriseType;
    private String udyamMajorActivity;

    public BusinessInfoDTO() {
    }

    public BusinessInfoDTO(String businessName, String proprietorName, String tagline,
                            String phone, String whatsapp, String address, String mapsUrl,
                            String udyamEnterpriseType, String udyamMajorActivity) {
        this.businessName = businessName;
        this.proprietorName = proprietorName;
        this.tagline = tagline;
        this.phone = phone;
        this.whatsapp = whatsapp;
        this.address = address;
        this.mapsUrl = mapsUrl;
        this.udyamEnterpriseType = udyamEnterpriseType;
        this.udyamMajorActivity = udyamMajorActivity;
    }

    // ---------- Getters and Setters ----------

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
