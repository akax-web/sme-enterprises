package com.subramanienterprises.dto;

/**
 * Response shape for GET /api/packages, /api/packages/hourly
 * and /api/packages/monthly.
 */
public class PackageDTO {

    private Long id;
    private String packageType;
    private String name;
    private String timing;
    private String priceDetails;
    private String priceLabel;
    private String notes;

    public PackageDTO() {
    }

    public PackageDTO(Long id, String packageType, String name, String timing,
                       String priceDetails, String priceLabel, String notes) {
        this.id = id;
        this.packageType = packageType;
        this.name = name;
        this.timing = timing;
        this.priceDetails = priceDetails;
        this.priceLabel = priceLabel;
        this.notes = notes;
    }

    // ---------- Getters and Setters ----------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTiming() {
        return timing;
    }

    public void setTiming(String timing) {
        this.timing = timing;
    }

    public String getPriceDetails() {
        return priceDetails;
    }

    public void setPriceDetails(String priceDetails) {
        this.priceDetails = priceDetails;
    }

    public String getPriceLabel() {
        return priceLabel;
    }

    public void setPriceLabel(String priceLabel) {
        this.priceLabel = priceLabel;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
