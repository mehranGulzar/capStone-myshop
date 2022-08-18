package com.example.backend.model;


import org.springframework.data.mongodb.repository.MongoRepository;

public interface ArticleRepo extends MongoRepository<Article, String> {


}
