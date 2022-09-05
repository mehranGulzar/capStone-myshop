import {Article} from "../Article";
import './ArticleCard.css';
import {Link} from "react-router-dom";


export type ArticleCardProps = {
   article : Article
}

export default function ArticleCard(props : ArticleCardProps){

    return (
        <div className={"article-card"}>
            <p id={"title"}>
                {props.article.title}
            </p>

         <div className={"article-image"}>
             <img alt={"my-shop"} src={props.article.imageUrl}/>
         </div>

            <div>


           <div>
               <div id={"price"}>
                {props.article.price} $
                </div>
               <button id={"button"}><Link to={"/details/"+ props.article.id}>Discover More</Link></button>
           </div>

            </div>





        </div>
    )

}