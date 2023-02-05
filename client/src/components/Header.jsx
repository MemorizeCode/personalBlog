import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
    return (<>
        <Link to="/">Главная</Link>
        <br></br>
        <Link to="/profile">Профиль</Link>
        <br></br>
        <Link to="/post">Посты</Link>
        <br></br>
        <Link to="/register">Регистрация</Link>
        <br></br>
        <Link to="/login">Вход</Link>
      
    </>);
}

export default Header;