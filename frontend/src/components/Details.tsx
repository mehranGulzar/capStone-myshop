import {useParams} from "react-router-dom";
import './Details.css'
import {useEffect, useState} from "react";
import {Article} from "../Article";
import axios from "axios";


export default function Details( ) {

    const [article, setArticle] = useState<Article >()
    const {id} = useParams();
    useEffect(() => {
        axios.get("api/article/"+ id)
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setArticle(data)
            })
    }, [])



    if (article === undefined) {
      return( <p>
          Error
      </p>)
    } else {
        return (


                <div className={"article-details"}>
                    <h3 className={"article-title"}>{article.title}</h3>

                        <img className={"article-image-details"} src={article.imageUrl} alt={"everyday"} />


                 <h2 className={"article-price"}>  <p >
                        {article.price} $

                    </p>
                 </h2>
                    <h2 className={"article-description"}>  <p >
                        {article.description}

                    </p>
                    </h2>
                    <div id={"details-id"}>
                        <h4>Article Id:</h4>
                    <h6 >
                        {article.id}

                    </h6>
                    </div>
                </div>

        )
    }
}