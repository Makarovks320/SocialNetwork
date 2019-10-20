import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
        <img className={s.logo} alt="logo" src="https://cdn.iconscout.com/icon/free/png-256/react-native-1-555609.png"></img>
      </header>
  )
}

export default Header;
