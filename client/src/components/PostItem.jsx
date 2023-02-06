import React, { useRef, useState } from "react";
import './assets/css/PostItem.css'
import axios from "axios";
import {
    Routes,
    Route,
    Link,
    useParams,
  } from "react-router-dom";


function PostItem(props){
    let [post,setpost] = useState([])
    let [Ge, setge] = useState(0)

    return(<>
    <div className="cards">
        <div key={props.post.id} className="card">
            <div>
                <Link to={`/post/id/${props.post.id}`}>
                <h1 className="card_text">{props.post.title}</h1>
                </Link>
            </div>
            <div>
                <p className="card_title">{props.post.body}</p>
            </div>
            <Link to={`/post/id/${props.post.id}`}>Перейти</Link>
        </div>
    </div>
    </>)
}

export default PostItem