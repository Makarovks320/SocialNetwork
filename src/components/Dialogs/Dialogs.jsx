/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Dialogs.module.css';
import Dialog_items from './Dialog-items/Dialog_items';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <Dialog_items dialogs={props.store.getState().messagesPage.dialogs}/>
      <Messages store = {props.store}/>
    </div>
    
  )
}

export default Dialogs;