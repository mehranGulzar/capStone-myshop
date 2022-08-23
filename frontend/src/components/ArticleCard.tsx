import {Article} from "../Article";

export type ArticleCardProps = {
   article : Article
}

export default function ArticleCard(props : ArticleCardProps){

    return (
        <div>
            <p>
                {props.article.title}
            </p>
            <p>
                {props.article.id}
            </p>
        </div>
    )

}