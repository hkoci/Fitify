package uk.ac.brunel.group7.fitify.model;

import javax.validation.constraints.NotNull;


public class UserNotificationSettingDTO {

    private Long id;

    @NotNull
    private Boolean dailyNotificationProgress;

    @NotNull
    private Boolean weeklyNotificationProgress;

    @NotNull
    private Boolean monthlyNotificationProgress;

    @NotNull
    private Boolean weightNotification;

    @NotNull
    private Boolean progressNotification;

    @NotNull
    private Boolean achievementsNotification;

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

}
