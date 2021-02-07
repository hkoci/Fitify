package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class UserAppearanceSetting {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 7)
    private String primaryHexColour;

    @Column(nullable = false, length = 7)
    private String secondaryHexColour;

    @Column(nullable = false)
    private Boolean darkMode;

    @Column(nullable = false)
    private Boolean highContrast;

    @Column(nullable = false)
    private Integer textSize;

    @Column(nullable = false, length = 7)
    private String avatarDefaultColour;

    @OneToOne(mappedBy = "apperance", fetch = FetchType.LAZY)
    private User apperance;

    @Column(nullable = false, updatable = false)
    protected OffsetDateTime dateCreated;

    @Column(nullable = false)
    protected OffsetDateTime lastUpdated;

    @PrePersist
    public void prePersist() {
        dateCreated = OffsetDateTime.now();
        lastUpdated = dateCreated;
    }

    @PreUpdate
    public void preUpdate() {
        lastUpdated = OffsetDateTime.now();
    }

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

    public User getApperance() {
        return apperance;
    }

    public void setApperance(final User apperance) {
        this.apperance = apperance;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
