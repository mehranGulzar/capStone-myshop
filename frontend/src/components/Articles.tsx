import axios from "axios";
import {useEffect, useState} from "react";
import {Article} from "../Article";
import ArticleCard from "./ArticleCard";
import './ArticleCard.css';
import './Articles.css';

export default function Articles(){

        const [articles , setArticles] = useState <Article[]>([])
        useEffect( () => {
                axios.get("api/article")
                    .then( (response)=>{return response.data})
                    .then( (data)=>{  setArticles(data)});
        }, [])



        return(
            <div className={"articles-box-all"}>{articles.map( (article) => <ArticleCard key={article.id} article={article}/>)}</div>
        )




}