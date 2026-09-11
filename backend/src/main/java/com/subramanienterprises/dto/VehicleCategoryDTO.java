package com.subramanienterprises.dto;

/**
 * Response shape for GET /api/vehicle-categories.
 */
public class VehicleCategoryDTO {

    private Long id;
    private String categoryName;
    private String description;
    private String priceNote;

    public VehicleCategoryDTO() {
    }

    public VehicleCategoryDTO(Long id, String categoryName, String description, String priceNote) {
        this.id = id;
        this.categoryName = categoryName;
        this.description = description;
        this.priceNote = priceNote;
    }

    // ---------- Getters and Setters ----------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriceNote() {
        return priceNote;
    }

    public void setPriceNote(String priceNote) {
        this.priceNote = priceNote;
    }
}
