import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom'

function CurrentPostItem(props){
    const navigate = useNavigate()
    let {id} = useParams()
    let [post,setpost] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8000/post/${id}`)
        .then(response=> {
            if(response.data == 'redirect'){
                //Посты не найдены
            }else{
                setpost([response.data])
            }
        })
    },[])
    return(<>
    <div>
    <div className="cards">
        {
        post.length == 0
        ? <h2>Пост не найден</h2> :
        post.map((e)=>
        <div className="card" key={e.id}>
            <div>
                <h1 className="card_text">{e.title}</h1>
            </div>
            <div>
                <p className="card_title">{e.body}</p>
            </div>
            <div className="card_date">
                <small>Дата публикации: {e.createdAt.slice(0,10)}</small>
                <br></br>
            </div>
            <div>
                <div className="like_com_pos">
                    <div className="card_like">
                        <p>Кол-во лайков: {e.countLike}</p>
                    </div>
                    <div className="card_com">
                        <p>Кол-во комментов: {e.comment}</p>
                    </div>
                </div>
            </div>
        </div>
        )}
        </div>
    </div>
    </>)
}

export default CurrentPostItem