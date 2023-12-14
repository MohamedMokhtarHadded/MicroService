package com.example.blocms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableDiscoveryClient
@EnableJpaRepositories
public class BlocMsApplication {

    public static void main(String[] args) {
        SpringApplication.run(BlocMsApplication.class, args);
    }
    @Bean
    public WebMvcConfigurer corsConfiguer(){

        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:4200")
                        .allowedMethods("DELETE", "GET", "POST", "PUT")
                        .allowCredentials(true)
                        .exposedHeaders("Access-Control-Allow-Origin", "Custom-Header");

            }
        };
    }

}
