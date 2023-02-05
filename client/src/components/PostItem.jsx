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
            <Link to={`/post/id/${props.post.id}`}>Перейти</Link>
            <div>
                <h1 className="card_text">{props.post.title}</h1>
            </div>
            <div>
                <p className="card_title">{props.post.body}</p>
            </div>
            <div className="card_date">
                <small>Дата публикации: {props.post.createdAt.slice(0,10)}</small>
                <br></br>
            </div>
            <div>
                <div className="like_com_pos">
                    <div className="card_like">
                        <p>Кол-во лайков: {props.post.countLike}</p>
                    </div>
                    <div className="card_com">
                        <p>Кол-во комментов: {props.post.comment}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default PostItem