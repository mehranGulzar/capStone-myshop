import axios from "axios";
import {useEffect, useState} from "react";
import {Article} from "../Article";


export default function Articles(){

        const [articles , setArticles] = useState <Article[]>([])
        useEffect( () => {
                axios.get("api/article")
                    .then( (response)=>{return response.data})
                    .then( (data)=>{  setArticles(data)});
        }, [])



        return(
            <div>{articles.map( (article) => article.title)}</div>
        )




}