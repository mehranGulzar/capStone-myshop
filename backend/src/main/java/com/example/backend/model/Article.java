package com.example.backend.model;

import org.springframework.data.annotation.Id;

public record Article(
        @Id
        String id,
        String title,
        double price,
        String description
){


}