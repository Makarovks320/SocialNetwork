import React from 'react';
import {NavLink} from 'react-router-dom'
import s from './Dialog_item.module.css';

const Dialog_item = (props) => {
  let path = '/dialogs/' + props.id
  return (
    <NavLink to={path} className={s.item}>
      {props.name + ' ' + props.surname}
    </NavLink>
  )
}

export default Dialog_item;