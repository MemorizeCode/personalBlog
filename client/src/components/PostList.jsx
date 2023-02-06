import React, { useEffect, useMemo, useState } from "react";
import PostItem from "./PostItem";
import axios from 'axios'

function PostList(props){
    let [posts,setpost] = useState([])
    let [Ge, setge] = useState(0)
    // let getpost = async ()=>{
    //     if(Ge == 0){
    //         let response = await axios.post("http://localhost:8000/posts")
    //         .then(response=> {
    //            setpost(response.data)
    //         })
    //         setge(Ge = Ge + 1)
    //     }
    // }
    // getpost()
    let [postLoading, setPostLoading] = useState(false)
    let response = async () => {
        if(Ge == 0 ){
            await axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setpost(posts = res.data))
            setPostLoading(postLoading = true)
            setge(Ge = Ge + 1)
        }
    }
    
    response()

    return(<>   
        {
        !postLoading ? <h2>Загрузка</h2> :
        posts.map((e)=>
        <PostItem  key={e.id} post={e}  />
        )}
    </>)
}

export default PostList