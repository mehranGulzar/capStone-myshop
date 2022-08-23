package com.example.backend;

import com.example.backend.model.Article;
import com.example.backend.model.ArticleRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {


    private final ArticleRepo articleRepo;



    public ArticleService(ArticleRepo articleRepo) {
        this.articleRepo = articleRepo;
    }


    public List<Article> getAllArticles(){
        return articleRepo.findAll();
    }
}