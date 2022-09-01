import {Article} from "../Article";
import './ArticleCard.css';
import {Link, Route, Routes} from "react-router-dom";


export type ArticleCardProps = {
   article : Article
}

export default function ArticleCard(props : ArticleCardProps){

    return (
        <div className={"article-card"}>

         <div className={"article-image"}>
             <img alt={"my-shop"} src={props.article.imageUrl}/>
         </div>

            <div>
           <h3 className={"article-title"}>
               <p id={"title"}>
                {props.article.title}
                </p>
           </h3>

           <h6>
               <p id={"price"}>
                {props.article.price} $
                </p>
           </h6>
                <button><Link to={"/details"}>Discover More</Link></button>
            </div>





        </div>
    )

}