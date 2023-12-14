package com.Univ.universitemicroservice;

import com.Univ.universitemicroservice.entities.Universite;
import com.Univ.universitemicroservice.repository.UniversiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableDiscoveryClient
public class UniversiteMicroServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(UniversiteMicroServiceApplication.class, args);
    }


    @Bean
    public WebMvcConfigurer corsConfiguer(){

        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:4200")
                        .allowedMethods("DELETE", "GET", "POST", "PUT", "OPTIONS")
                        .allowCredentials(true)
                        .exposedHeaders("Access-Control-Allow-Origin", "Custom-Header");

            }
        };
    }




}
