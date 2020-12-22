# Spring Data repository

The Spring Data repo has been planned out in Bootify.io, where you declare data entities, objects, controllers, and general Java development configuration (such as JDK, DBMS and any further dependencies). It allows us to design our algorithm by making us specify the data attributes and will generate a UML class diagram showing this.

The project link for development collaboration is [linked here](https://bootify.io/app/B4VZDWFTBX9M) where members can edit the development plan. The relevant development sections contain screenshots below as of when this markdown file was created.

## Global project settings

The global project settings are declared in a table below:

| Attribute | Value |
|--|--|
| Project group | `uk.ac.brunel.group7` |
| Project name | `healthapp` |
| Build type | `Maven` |
| Java Version | `11` |
| JUnit Testing | `@TestContainers` |
| REST Endpoint Tests | `OpenAPI/SwaggerUI` |
| DBMS Technology | *(Internal)* `HyperSQL` |
| DB Creation | `Hibernate (update)` |

### Automated Testing
The following Java libraries have been used to automate testing in the application.

#### TestContainers
[TestContainers](https://www.testcontainers.org/) is an automated way of testing our API requests; it is like an automated postman application. It runs tests on a temporary database with made-up values to ensure the endpoints can handle unexpected requests. TestContainers supports JUnit tests as well and this runs tests on a Docker container.

We have implemented a GitHub Actions workflow to ensure commits to our code is testing on a virtual Ubuntu machine running on GitHub Actions, it will then compile the application package after a successfully run Maven test. The results of each test can be seen through the details of each commit.

TestContainers is only run when your IDE is on 'test' build and not a standard package build. This can be done on Linux using `mvn -B test --file pom.xml` or by clicking the test button on your IDE.

#### SwaggerUI
[SwaggerUI](https://springdoc.org/) is part of the Spring OpenAPI3 library that has a web interface running at `http://localhost:8080/swagger-ui.html`, you can see an [demo example here](http://158.101.164.60:8081/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config) (which is seen in the image below). It lists all REST Spring endpoints and it can perform the relevant HTTP requests, similar to Postman.

![SwaggerUI Demo from springdoc.org documentation](https://springdoc.org/images/pets.png)

## Entities

The entities used in the application are shown on the relational database model below. This will be how our SQL database layout is made.

![Relational database model](SPRINGDATA.assets/DatabaseModel.png.png)

## Data Objects and Controllers

Each of the declared entities will have the Data Transfer Object (DTO) design pattern. Likewise, each declared entity will have its own controller.

| Entity | Data Transfer Object | Controller |
|--|--|--|
| User | `UserDTO` | `UserController` |
| Activity | `ActivityDTO` | `ActivityController` |
| WeightTracker | `WeightTrackerDTO` | `WeightTrackerController` |
| PhysicalMovement | `PhysicalMovementDTO` | `PhysicalMovementController` |
| Post | `PostDTO` | `PostController` |
| Step | `StepDTO` | `StepController` |
| UserFriend | `UserFriendDTO` | `UserFriendController` |