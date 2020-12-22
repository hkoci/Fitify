package uk.ac.brunel.group7.healthapp.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EntityScan(basePackages = {"uk.ac.brunel.group7.healthapp.domain"})
@EnableJpaRepositories(basePackages = {"uk.ac.brunel.group7.healthapp.repos"})
@EnableTransactionManagement
public class DomainConfig {
}
