package com.example.backend.controller;


import com.example.backend.ArticleService;
import com.example.backend.model.NewArticle;
import com.example.backend.model.Article;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/article")
public class ArticleController {

    ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    List <Article> getAllArticles(){
        return articleService.getArticles();
    }

    @PostMapping("{name}")
    public Article addArticle(@PathVariable String name){

        return articleService.addArticle(new NewArticle(name));

    }

}
