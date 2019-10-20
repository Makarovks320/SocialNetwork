import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <NavLink className={s.item} to='/profile' activeClassName={s.activeLink}>My profile</NavLink>
          </li>
          <li>
            <NavLink className={s.item} to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
          </li>
          <li>
            <NavLink className={s.item} to='/communities' activeClassName={s.activeLink}>Communities</NavLink>
          </li>
          <li>
            <NavLink className={s.item} to='/news' activeClassName={s.activeLink}>News</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;
