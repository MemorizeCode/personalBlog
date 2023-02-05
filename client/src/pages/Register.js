import React, { useState } from 'react';
import InputNC from '../components/UI/Input/InputNC';
import Button from '../components/UI/Buttom/Button'
import axios from 'axios';

function Register() {

    let [login, setlogin] = useState('')
    let [password, setpassword] = useState('')
    let [repeatpassword, setrepeatpassword] = useState('')
    let [otvet,setotvet] = useState('')

    const newacc =  async (login,password,repeatpassword) => {

 
        // let response = await axios.post('http://localhost:8000/registration', {
        //     login,
        //     password,
        //     repeatpassword
        // })
        // .then(response => setotvet(response.data))
    }

    return (<>
    <h2>Регистрация</h2>
    <h2>{otvet}</h2>
    <InputNC placeholder="Логин" type="text" value={login} onChange={e=>setlogin(e.target.value)} />
    <InputNC placeholder="Пароль" type="password" value={password} onChange={e=>setpassword(e.target.value)} />
    <InputNC placeholder="Повторите пароль" type="password" value={repeatpassword} onChange={e=>setrepeatpassword(e.target.value)} />
    <button onClick={()=>newacc(login,password,repeatpassword)}>Зарегестрироваться</button>
    </>);
}

export default Register;