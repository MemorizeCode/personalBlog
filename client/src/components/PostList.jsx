import React, { useEffect, useMemo, useState } from "react";
import PostItem from "./PostItem";
import axios from 'axios'






function PostList(props){
    let [posts,setpost] = useState([])
    let [Ge, setge] = useState(0)
    let getpost = async ()=>{
        if(Ge == 0){
            let response = await axios.post("http://localhost:8000/posts")
            .then(response=> {
               setpost(response.data)
            })
            setge(Ge = Ge + 1)
        }
        else{
            console.log('Посты получены')
        }
    }
    getpost()
    

    return(<>
   
        {posts.map((e)=>
        <PostItem  key={e.id} post={e}  />
        )}
    </>)
}

export default PostList