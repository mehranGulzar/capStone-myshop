package com.example.backend;

import com.example.backend.model.Article;
import com.example.backend.model.ArticleRepo;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


public class ArticleServiceTest {


ArticleRepo articleRepo = mock(ArticleRepo.class);

ArticleService articleService = new ArticleService(articleRepo);

    @Test
    void getAllArticleTest(){
                                                Article article= new Article(
                                                        "1",
                                                        "Shoe2",
                                                        342.4,
                                                        "Made in Germany"

                                                );
                                                when(articleRepo.findAll()).thenReturn(List.of(article));
                                                List <Article> actual = articleService.getAllArticles();
                                                Assertions.assertEquals(List.of(article), actual);
    }


    @Test
    void saveArticleTest(){
        Article article= new Article(
                "1",
                "Shoe2",
                342.4,
                "Made in Germany"

        );
        when(articleRepo.save(article)).thenReturn(article);
       Article actual = articleService.saveArticle(article);

        Assertions.assertEquals(article, actual);

    }


   @Test
    void deleteArticleTest(){
        Article article= new Article(
                "1",
                "Shoe2",
                342.4,
                "Made in Germany"

        );
        String id = article.id();
        when(articleService.deleteArticle(id)).thenReturn(true);
        boolean actual = articleService.deleteArticle(article.id());
        Assertions.assertEquals(true, actual);
    }







}
