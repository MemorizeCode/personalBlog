import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Info() {
    let [user,seuser] = useState([])
    let [ge,setge] = useState(0)
    

        async function fetchPost(){
            await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(responce => seuser(responce.data))
        }

    
    useEffect(() => {
        return () => {
            console.log('use effect')
            fetchPost()
      }
    }, [])
    

    return (<>
    <h2>Общедоступная информация</h2>
    {
        user.map((e)=>
        <div key={e.id}>
            <h2>{e.name}</h2>
            <h3>{e.sername}</h3>
        </div>
        )
    }
    </>);
}

export default Info;