package com.subramanienterprises.model;

import jakarta.persistence.*;

/**
 * Maps to the packages table.
 * Represents a single line item within either the HOURLY or
 * MONTHLY package type (package_type discriminates between them).
 *
 * price_details is stored and returned exactly as provided by
 * the client (e.g. "₹500 + ₹100"). No calculation or
 * interpretation of the "+" components is performed anywhere
 * in this application - see price_label for the generic
 * "Base Charge + Additional Charge" description used until the
 * client clarifies the exact meaning.
 */
@Entity
@Table(name = "packages")
public class Package {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "package_type", nullable = false, length = 30)
    private String packageType;

    @Column(name = "name", nullable = false, length = 150)
    private String name;

    @Column(name = "timing", length = 100)
    private String timing;

    @Column(name = "price_details", length = 255)
    private String priceDetails;

    @Column(name = "price_label", length = 255)
    private String priceLabel;

    @Column(name = "notes", length = 255)
    private String notes;

    @Column(name = "display_order")
    private Integer displayOrder;

    @Column(name = "active")
    private Boolean active;

    public Package() {
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

    public Integer getDisplayOrder() {
        return displayOrder;
    }

    public void setDisplayOrder(Integer displayOrder) {
        this.displayOrder = displayOrder;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
