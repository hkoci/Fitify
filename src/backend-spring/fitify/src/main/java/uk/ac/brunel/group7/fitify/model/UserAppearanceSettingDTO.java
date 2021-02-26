package uk.ac.brunel.group7.fitify.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class UserAppearanceSettingDTO {

    private Long id;

    @NotNull
    @Size(max = 7)
    private String primaryHexColour;

    @NotNull
    @Size(max = 7)
    private String secondaryHexColour;

    @NotNull
    private Boolean darkMode;

    @NotNull
    private Boolean highContrast;

    @NotNull
    private Integer textSize;

    @NotNull
    @Size(max = 7)
    private String avatarDefaultColour;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getPrimaryHexColour() {
        return primaryHexColour;
    }

    public void setPrimaryHexColour(final String primaryHexColour) {
        this.primaryHexColour = primaryHexColour;
    }

    public String getSecondaryHexColour() {
        return secondaryHexColour;
    }

    public void setSecondaryHexColour(final String secondaryHexColour) {
        this.secondaryHexColour = secondaryHexColour;
    }

    public Boolean getDarkMode() {
        return darkMode;
    }

    public void setDarkMode(final Boolean darkMode) {
        this.darkMode = darkMode;
    }

    public Boolean getHighContrast() {
        return highContrast;
    }

    public void setHighContrast(final Boolean highContrast) {
        this.highContrast = highContrast;
    }

    public Integer getTextSize() {
        return textSize;
    }

    public void setTextSize(final Integer textSize) {
        this.textSize = textSize;
    }

    public String getAvatarDefaultColour() {
        return avatarDefaultColour;
    }

    public void setAvatarDefaultColour(final String avatarDefaultColour) {
        this.avatarDefaultColour = avatarDefaultColour;
    }

}
