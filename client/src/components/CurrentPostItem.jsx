import React from "react";
import { useState } from "react";
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom'
function CurrentPostItem(props){
    const navigate = useNavigate()
    let id = useParams()
    let [post,setpost] = useState([])
    let [Ge, setge] = useState(0)
    let getpost = async (id)=>{
        if(Ge == 0){
            let response = await axios.get(`http://localhost:8000/post/${id}`)
            .then(response=> {
                if(response.data == 'redirect'){
                    return navigate('/post/id/')
                }else{
                    setpost([response.data])
                }
            })
            setge(Ge = Ge + 1)
        }
        else{
            console.log('Посты получены')
        }
    }
    getpost(id.id)
    console.log(post)
    return(<>
    <div>
    <div className="cards">
        {post.map((e)=>
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