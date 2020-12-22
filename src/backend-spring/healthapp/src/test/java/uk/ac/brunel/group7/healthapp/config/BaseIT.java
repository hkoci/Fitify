package uk.ac.brunel.group7.healthapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.StreamUtils;
import java.nio.charset.Charset;
import java.io.IOException;
import java.io.UncheckedIOException;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlMergeMode;
import uk.ac.brunel.group7.healthapp.HealthappApplication;
import uk.ac.brunel.group7.healthapp.repos.ActivityRepository;
import uk.ac.brunel.group7.healthapp.repos.WeightTrackerRepository;
import uk.ac.brunel.group7.healthapp.repos.PhysicalMovementRepository;
import uk.ac.brunel.group7.healthapp.repos.PostRepository;
import uk.ac.brunel.group7.healthapp.repos.StepRepository;
import uk.ac.brunel.group7.healthapp.repos.UserFriendRepository;
import uk.ac.brunel.group7.healthapp.repos.UserRepository;


/**
 * Abstract base class to be extended by every IT test. Starts the Spring Boot context, with all data
 * wiped out before each test.
 */
@SpringBootTest(classes = HealthappApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("it")
@Sql("/data/clearAll.sql")
@SqlMergeMode(SqlMergeMode.MergeMode.MERGE)
public abstract class BaseIT {

    public String readResource(final String resourceName) {
        try {
            return StreamUtils.copyToString(getClass().getResourceAsStream(resourceName), Charset.forName("UTF-8"));
        } catch (final IOException io) {
            throw new UncheckedIOException(io);
        }
    }

    public HttpHeaders headers() {
        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    public ActivityRepository activityRepository;

    @Autowired
    public WeightTrackerRepository weightTrackerRepository;

    @Autowired
    public PhysicalMovementRepository physicalMovementRepository;

    @Autowired
    public PostRepository postRepository;

    @Autowired
    public StepRepository stepRepository;

    @Autowired
    public UserFriendRepository userFriendRepository;

    @Autowired
    public UserRepository userRepository;

}
