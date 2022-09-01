package com.example.backend;


import com.example.backend.model.Article;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc

public class ArticleIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    void getAllArticle() throws Exception{
        mockMvc.perform(
                get("/api/article")
        ).andExpect(status().is(200));
    }


    @Test
    @DirtiesContext
    void deleteArticle() throws Exception{
       Article articleTest = new Article("9","TestArticle",12.99,"TestArticle", "");

       String saveResult = mockMvc.perform(post("/api/article")
                       .contentType(MediaType.APPLICATION_JSON)
               .content(
                       """
                               {"name": "Scarf"}
                               """
               )).andReturn()
                       .getResponse()
                               .getContentAsString();
       Article saveResultArticle = objectMapper.readValue(saveResult, Article.class);
       String id = saveResultArticle.id();

       mockMvc.perform(
                delete("http://localhost:8080/api/article/" + id)
        ).andExpect(status().is(200));


       mockMvc.perform(get("http://localhost:8080/api/article"))
               .andExpect(status().isOk())
               .andExpect(content().json("""
[]
"""));
    }





}
