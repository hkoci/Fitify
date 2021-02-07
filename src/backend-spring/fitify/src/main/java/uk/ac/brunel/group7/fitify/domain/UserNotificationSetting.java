package uk.ac.brunel.group7.fitify.domain;

import javax.persistence.*;
import java.time.OffsetDateTime;


@Entity
public class UserNotificationSetting {

    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Boolean dailyNotificationProgress;

    @Column(nullable = false)
    private Boolean weeklyNotificationProgress;

    @Column(nullable = false)
    private Boolean monthlyNotificationProgress;

    @Column(nullable = false)
    private Boolean weightNotification;

    @Column(nullable = false)
    private Boolean progressNotification;

    @Column(nullable = false)
    private Boolean achievementsNotification;

    @OneToOne(mappedBy = "notification", fetch = FetchType.LAZY)
    private User notification;

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

    public Boolean getDailyNotificationProgress() {
        return dailyNotificationProgress;
    }

    public void setDailyNotificationProgress(final Boolean dailyNotificationProgress) {
        this.dailyNotificationProgress = dailyNotificationProgress;
    }

    public Boolean getWeeklyNotificationProgress() {
        return weeklyNotificationProgress;
    }

    public void setWeeklyNotificationProgress(final Boolean weeklyNotificationProgress) {
        this.weeklyNotificationProgress = weeklyNotificationProgress;
    }

    public Boolean getMonthlyNotificationProgress() {
        return monthlyNotificationProgress;
    }

    public void setMonthlyNotificationProgress(final Boolean monthlyNotificationProgress) {
        this.monthlyNotificationProgress = monthlyNotificationProgress;
    }

    public Boolean getWeightNotification() {
        return weightNotification;
    }

    public void setWeightNotification(final Boolean weightNotification) {
        this.weightNotification = weightNotification;
    }

    public Boolean getProgressNotification() {
        return progressNotification;
    }

    public void setProgressNotification(final Boolean progressNotification) {
        this.progressNotification = progressNotification;
    }

    public Boolean getAchievementsNotification() {
        return achievementsNotification;
    }

    public void setAchievementsNotification(final Boolean achievementsNotification) {
        this.achievementsNotification = achievementsNotification;
    }

    public User getNotification() {
        return notification;
    }

    public void setNotification(final User notification) {
        this.notification = notification;
    }

    public OffsetDateTime getDateCreated() {
        return dateCreated;
    }

    public OffsetDateTime getLastUpdated() {
        return lastUpdated;
    }

}
