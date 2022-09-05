import {useParams} from "react-router-dom";
import './Details.css'


export default function Details( ){



    const {id} = useParams();

    return(
        <div>
            <h1>welcome to Details</h1>
            <div className={"article-details"}>
                <p>
                    {id}
                </p>
            </div>
        </div>
    )
}