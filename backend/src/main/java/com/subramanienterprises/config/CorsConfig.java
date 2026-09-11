package com.subramanienterprises.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * CORS configuration.
 *
 * All endpoints in this application are public GET endpoints
 * (no authentication), so CORS only needs to control WHICH
 * frontend origins are allowed to call the API - it is not
 * acting as a security/authorization boundary.
 *
 * Allowed origins are read from application.properties
 * (app.cors.allowed-origins), which in turn reads the
 * CORS_ALLOWED_ORIGINS environment variable. Update that
 * environment variable with your deployed frontend URL.
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Value("${app.cors.allowed-origins}")
    private String allowedOrigins;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        String[] origins = allowedOrigins.split(",");
        registry.addMapping("/api/**")
                .allowedOrigins(origins)
                .allowedMethods("GET", "OPTIONS")
                .allowedHeaders("*")
                .maxAge(3600);
    }
}
