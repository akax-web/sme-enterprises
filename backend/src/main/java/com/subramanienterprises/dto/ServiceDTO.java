package com.subramanienterprises.dto;

/**
 * Response shape for GET /api/services and GET /api/services/{id}.
 */
public class ServiceDTO {

    private Long id;
    private String name;
    private String shortDescription;
    private String buttonLabel;
    private String buttonAction;

    public ServiceDTO() {
    }

    public ServiceDTO(Long id, String name, String shortDescription,
                       String buttonLabel, String buttonAction) {
        this.id = id;
        this.name = name;
        this.shortDescription = shortDescription;
        this.buttonLabel = buttonLabel;
        this.buttonAction = buttonAction;
    }

    // ---------- Getters and Setters ----------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public String getButtonLabel() {
        return buttonLabel;
    }

    public void setButtonLabel(String buttonLabel) {
        this.buttonLabel = buttonLabel;
    }

    public String getButtonAction() {
        return buttonAction;
    }

    public void setButtonAction(String buttonAction) {
        this.buttonAction = buttonAction;
    }
}
