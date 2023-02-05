import axios from 'axios';
import React, { useState } from 'react';
import InputNC from '../components/UI/Input/InputNC';


function Login() {
    let [login, setlogin] = useState('')
    let [password, setpassword] = useState('')

    let [otvet,setotvet] = useState('')
    const vxodacc =  async (login,password)=>{
        let response = axios.post('http://localhost:8000/login',{
            login,
            password
        })
        .then(response=> setotvet(otvet = response.data.message))
    }
    return (<>
    <h2>Вход</h2>
    <h2>{otvet}</h2>
    <InputNC placeholder="Логин" type="text" value={login} onChange={e=>setlogin(e.target.value)} />
    <InputNC placeholder="Пароль" type="password" value={password} onChange={e=>setpassword(e.target.value)} />
    <button onClick={()=>vxodacc(login,password)}>Войти</button>
    </>);
}

export default Login;