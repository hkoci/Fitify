package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class UserMarketingSetting {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Boolean marketingEmailPreference;

    @Column(nullable = false)
    private Boolean dailyEmailProgressPreference;

    @Column(nullable = false)
    private Boolean weeklyEmailProgressPreference;

    @Column(nullable = false)
    private Boolean marketingRoadmapPreference;

    @Column(nullable = false)
    private Boolean progressPreference;

    @Column(nullable = false)
    private Boolean achievementsPreference;

    @OneToOne(mappedBy = "marketing", fetch = FetchType.LAZY)
    private User marketing;

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

    public Boolean getMarketingEmailPreference() {
        return marketingEmailPreference;
    }

    public void setMarketingEmailPreference(final Boolean marketingEmailPreference) {
        this.marketingEmailPreference = marketingEmailPreference;
    }

    public Boolean getDailyEmailProgressPreference() {
        return dailyEmailProgressPreference;
    }

    public void setDailyEmailProgressPreference(final Boolean dailyEmailProgressPreference) {
        this.dailyEmailProgressPreference = dailyEmailProgressPreference;
    }

    public Boolean getWeeklyEmailProgressPreference() {
        return weeklyEmailProgressPreference;
    }

    public void setWeeklyEmailProgressPreference(final Boolean weeklyEmailProgressPreference) {
        this.weeklyEmailProgressPreference = weeklyEmailProgressPreference;
    }

    public Boolean getMarketingRoadmapPreference() {
        return marketingRoadmapPreference;
    }

    public void setMarketingRoadmapPreference(final Boolean marketingRoadmapPreference) {
        this.marketingRoadmapPreference = marketingRoadmapPreference;
    }

    public Boolean getProgressPreference() {
        return progressPreference;
    }

    public void setProgressPreference(final Boolean progressPreference) {
        this.progressPreference = progressPreference;
    }

    public Boolean getAchievementsPreference() {
        return achievementsPreference;
    }

    public void setAchievementsPreference(final Boolean achievementsPreference) {
        this.achievementsPreference = achievementsPreference;
    }

    public User getMarketing() {
        return marketing;
    }

    public void setMarketing(final User marketing) {
        this.marketing = marketing;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
