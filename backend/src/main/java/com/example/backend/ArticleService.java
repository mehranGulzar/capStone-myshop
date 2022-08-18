package com.example.backend;


import com.example.backend.model.Article;
import com.example.backend.model.ArticleRepo;
import com.example.backend.model.NewArticle;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ArticleService {


    private final ArticleRepo articleRepo;

    public ArticleService(ArticleRepo articleRepo) {
        this.articleRepo = articleRepo;
    }



    public List<Article> getArticles(){
        return articleRepo.findAll();
    }

public Article addArticle(NewArticle newArticle){
        return articleRepo.save( new Article(
                UUID.randomUUID().toString(),newArticle.name(),"description fild" , 1.40
        ));
    }




}
