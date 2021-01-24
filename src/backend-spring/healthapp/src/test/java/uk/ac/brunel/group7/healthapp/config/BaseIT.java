package uk.ac.brunel.group7.healthapp.config;

//Import the Spring Framework Autowired functionality
import org.springframework.beans.factory.annotation.Autowired;

//Import the Spring Boot Test module for launching the application under test
import org.springframework.boot.test.context.SpringBootTest;

//Import the Spring Framework Test modules for setting the database properties
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

//Import the endpoint test template
import org.springframework.boot.test.web.client.TestRestTemplate;

//Import the necessary modules for setting up the HTTP header for authentication
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.StreamUtils;

//Import the modules required for reporting IO errors in reading resources
import java.nio.charset.Charset;
import java.io.IOException;
import java.io.UncheckedIOException;

//Import the Spring jdbc for connecting to SQL db and merge functionality
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlMergeMode;
//Import the test container for MySQL database
import org.testcontainers.containers.MySQLContainer;

//Import classes to be tested (Spring Repos)
import uk.ac.brunel.group7.healthapp.HealthappApplication;
import uk.ac.brunel.group7.healthapp.repos.ActivityRepository;
import uk.ac.brunel.group7.healthapp.repos.WeightTrackerRepository;
import uk.ac.brunel.group7.healthapp.repos.PhysicalMovementRepository;
import uk.ac.brunel.group7.healthapp.repos.PostRepository;
import uk.ac.brunel.group7.healthapp.repos.StepRepository;
import uk.ac.brunel.group7.healthapp.repos.UserFriendRepository;
import uk.ac.brunel.group7.healthapp.repos.UserRepository;


/**
 * Abstract base class to be extended by every IT test. Starts the Spring Boot context with a
 * Datasource connected to the Testcontainers Docker instance. The instance is reused for all tests,
 * with all data wiped out before each test.
 */

//Start SpringBoot main class using a random webport 
@SpringBootTest(classes = HealthappApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//Specifiy a profile 'it'
@ActiveProfiles("it")
//Required userData for authentication Bearer to access endpoints without unauthroisation errors
@Sql({"/data/clearAll.sql", "/data/userData.sql"})
//Merge clearAll with userData to ensure a clean database on each run
@SqlMergeMode(SqlMergeMode.MergeMode.MERGE)

//Abstract IT test
public abstract class BaseIT {

    //Initialise a MySQL testContainers container for use in testing the database
    private static final MySQLContainer mySQLContainer;

    //Specifiy the test container schema as MySQL 8, with the username and password
    static {
        mySQLContainer = (MySQLContainer)(new MySQLContainer("mysql:8.0")
                .withUsername("testcontainers")
                .withPassword("Testcontain3rs!")
                .withReuse(true));
        mySQLContainer.start();
    }

    //Set the Spring Boot database properties to connect to the MySQL test container
    @DynamicPropertySource
    public static void setDatasourceProperties(final DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", mySQLContainer::getJdbcUrl);
        registry.add("spring.datasource.password", mySQLContainer::getPassword);
        registry.add("spring.datasource.username", mySQLContainer::getUsername);
    }

    //Method for reading resources, tries to copy to string as UTF-8 and throw IO exception if unable to read resource
    public String readResource(final String resourceName) {
        try {
            return StreamUtils.copyToString(getClass().getResourceAsStream(resourceName), Charset.forName("UTF-8"));
        } catch (final IOException io) {
            throw new UncheckedIOException(io);
        }
    }

    //Setting the HTTP headers
    //To allow endpoints access to test without being unauthorised, the Bearer Authentication Token (JWT) as been set manually for test user
    //Authentication headers have to have a Application/Json content-type
    //This ensures every request contains the relevant authentication token present so expected results are gained from the endpoints
    public HttpHeaders headers() {
        final HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjExNTY1MTQzfQ.Gve40vvSgcMDpGbNRS0V7o44K6gnqtD91_hVvis7y-KfG7Hvi0KQDzhT4EdQP4uUbJ8DrNZd9ioqaCS1bs6AaA");
        return headers;
    }

    //Autowire all the Repos that will be tested.
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
