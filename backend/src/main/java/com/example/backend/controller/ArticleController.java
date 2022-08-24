package com.example.backend.controller;

import com.example.backend.ArticleService;
import com.example.backend.model.Article;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/article")
public class ArticleController {


    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    List<Article> getArticles() {

        return articleService.getAllArticles();
    }

    @PostMapping()
    Article addArticle(@RequestBody Article article) {
        return articleService.saveArticle(article);
    }





    @DeleteMapping(value = "{id}")
    public ResponseEntity<String> deletePost(@PathVariable String id) {

        boolean bool = articleService.deleteArticle(id);

        if (!bool) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(id, HttpStatus.OK);
        }
    }

}