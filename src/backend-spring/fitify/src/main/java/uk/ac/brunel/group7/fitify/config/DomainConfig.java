package uk.ac.brunel.group7.fitify.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@EntityScan(basePackages = {"uk.ac.brunel.group7.fitify.domain"})
@EnableJpaRepositories(basePackages = {"uk.ac.brunel.group7.fitify.repos"})
@EnableTransactionManagement
public class DomainConfig {
}
