import {FormEvent, useState} from "react";
import {NewArticle} from "../Article";
import './AddArticle.css';
import axios from "axios";




export default function AddArticle (){

    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0.00);
    const [description, setDescription] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string>("");


    const [deleteArticleId , setDeleteArticleId] = useState<string>("");
    function handlerDelete(event: FormEvent ) {
        event.preventDefault();
        axios.delete("/api/article/" + deleteArticleId)
            .then((response) => {
            });
    }

    function handlerSubmit(event : FormEvent) {
     event.preventDefault();
     const newArticle : NewArticle = {
         "title" : title,
         "price" : price,
         "description" : description,
         "imageUrl" : imageUrl
     }
     axios.post("api/article/" , newArticle)
         .then( (response) => {});
 }

    return (
        <div className={"add-article-body"}>
            <div className={"forms"}>

                     <form className={"add-article-form"} onSubmit={handlerSubmit}>
                        <h2>Add an Article </h2>
                        <label>Title: </label>  <br/><input onChange={ (event) => {setTitle(event.target.value)}} value={title} name={"title"} type={"text"} placeholder={"Title of Article"}/><br/><br/>
                        <label>Price: </label> <br/> <input onChange={ (event) => {setPrice(Number(event.target.value))}} value={price} name={"price"} placeholder={"Price of Article"}/><br/><br/>
                        <label>Description: </label> <br/> <input onChange={ (event) => {setDescription(event.target.value)}} value={description} name={"description"} type={"text"} placeholder={"Description of Article"}/><br/><br/>
                        <label>Image Url: </label> <br/> <input onChange={ (event) => {setImageUrl(event.target.value)}} value={imageUrl} name={"imageUrl"} type={"text"} placeholder={"Image Url of Article"}/><br/><br/>
                        <button className={"button"} type={"submit"}>Add Article</button>
                    </form>



                    <form className={"delete-article-form"} onSubmit={handlerDelete}>
                        <h2>Delete an Article </h2>
                        <label>Enter the Id: </label>  <br/><input onChange={ (event) => {setDeleteArticleId(event.target.value)}} value={deleteArticleId} type={"text"} placeholder={""}/><br/><br/>
                        <button className={"button"}>Delete Article</button>
                    </form>

            </div>

        </div>
    )



}