import {Article} from "../Article";
import './ArticleCard.css';


export type ArticleCardProps = {
   article : Article
}

export default function ArticleCard(props : ArticleCardProps){

    return (
        <div className={"article-card"}>

         <div className={"article-image"}>
             <img alt={"my-shop"} src={"https://i.picsum.photos/id/149/300/200.jpg?hmac=XKlOrt-x2hGqKpxy4UE49VgHJ0wraX3a8kLX3Oz9CU8"}/>
         </div>
           <h3 className={"article-title"}>
               <p>
                {props.article.title}
                </p>
           </h3>

           <h6>
               <p>
                {props.article.id}
                </p>
           </h6>
        </div>
    )

}