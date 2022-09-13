
export type Article = {


    id : string,
    title: string
    price: number
    description: string
    imageUrl : string

}


export type NewArticle = Omit<Article, "id">