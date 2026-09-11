package com.subramanienterprises.exception;

/**
 * Thrown when a requested resource (e.g. a service by id)
 * does not exist. Handled globally by GlobalExceptionHandler
 * and translated into a 404 response.
 */
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }
}
