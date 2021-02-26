package uk.ac.brunel.group7.fitify.model;

import javax.validation.constraints.NotNull;


public class UserMarketingSettingDTO {

    private Long id;

    @NotNull
    private Boolean marketingEmailPreference;

    @NotNull
    private Boolean dailyEmailProgressPreference;

    @NotNull
    private Boolean weeklyEmailProgressPreference;

    @NotNull
    private Boolean marketingRoadmapPreference;

    @NotNull
    private Boolean progressPreference;

    @NotNull
    private Boolean achievementsPreference;

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

}
