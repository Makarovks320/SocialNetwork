import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom'
const Header = (props) => {
  return (
    <div className={s.header}>
        <img className={s.logo} alt="logo" src="https://cdn.iconscout.com/icon/free/png-256/react-native-1-555609.png"></img>
        <div className={s.loginBlock}>
          {props.isAuth ? props.login :
          <NavLink to={'/login'}>Log In</NavLink>}
        </div>
    </div>
  )
}

export default Header;
