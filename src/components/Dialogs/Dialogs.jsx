/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Dialogs.module.css';
import Dialog_items from './Dialog-items/Dialog_items';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  
  return (
    <div className={s.dialogs}>
      <Dialog_items dialogs={props.messagesPage.dialogs}/>
      <Messages messagesPage = {props.messagesPage} dispatch = {props.dispatch}/>
    </div>
    
  )
}

export default Dialogs;