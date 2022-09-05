import {useEffect, useState} from "react";
import {Article} from "../Article";
import './AddArticle.css';
import axios from "axios";

export default function AddArticle (){

    const [article, setArticle] = useState<Article >(  );

    useEffect( () => {
        axios.post("api/article")
            .then( (response) => { return response.data})
            .then( (data) => { setArticle(data)})
              }, []);

    return (
        <div>
            <div className={"forms"}>
            <div>

          <form className={"add-article-form"}>
              <h2>Add an Article </h2>
            <label>Title: </label>  <br/><input type={"text"} placeholder={"Title of Article"}/><br/><br/>
              <label>Price: </label> <br/> <input type={"text"} placeholder={"Price of Article"}/><br/><br/>
              <label>Description: </label> <br/> <input type={"text"} placeholder={"Description of Article"}/><br/><br/>
              <label>Image Url: </label> <br/> <input type={"text"} placeholder={"Image Url of Article"}/><br/><br/>
            <a className={"button"}>Add Article</a>
          </form>
           </div>
            <div>
                <form className={"delete-article-form"}>
                    <h2>Delete an Article </h2>
                    <label>Enter the Id: </label>  <br/><input type={"text"} placeholder={""}/><br/><br/>

                    <a className={"button"}>Delete Article</a>
                </form>
            </div>
            </div>
        </div>
    )



}