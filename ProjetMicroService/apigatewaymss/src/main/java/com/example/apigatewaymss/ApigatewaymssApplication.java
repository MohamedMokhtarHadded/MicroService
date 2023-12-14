package com.example.apigatewaymss;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient

public class ApigatewaymssApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApigatewaymssApplication.class, args);
    }

}
