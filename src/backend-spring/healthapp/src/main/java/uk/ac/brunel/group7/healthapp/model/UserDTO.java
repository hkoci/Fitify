package uk.ac.brunel.group7.healthapp.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


public class UserDTO {

    private Long id;

    @NotNull
    @Size(max = 255)
    private String username;

    @NotNull
    @Size(max = 255)
    private String password;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String gender;

    @NotNull
    @Size(max = 255)
    private String emailAddress;

    @NotNull
    private LocalDate dob;

    @NotNull
    private LocalDateTime userCreated;

    @NotNull
    private LocalDateTime userLastAuth;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(final String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(final String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(final String gender) {
        this.gender = gender;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(final String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(final LocalDate dob) {
        this.dob = dob;
    }

    public LocalDateTime getUserCreated() {
        return userCreated;
    }

    public void setUserCreated(final LocalDateTime userCreated) {
        this.userCreated = userCreated;
    }

    public LocalDateTime getUserLastAuth() {
        return userLastAuth;
    }

    public void setUserLastAuth(final LocalDateTime userLastAuth) {
        this.userLastAuth = userLastAuth;
    }

}
