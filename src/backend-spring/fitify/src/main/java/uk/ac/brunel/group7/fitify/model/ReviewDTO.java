package uk.ac.brunel.group7.fitify.model;

import javax.validation.constraints.Size;


public class ReviewDTO {

    private Long id;

    @Size(max = 255)
    private String name;

    private String review;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getReview() {
        return review;
    }

    public void setReview(final String review) {
        this.review = review;
    }

}

