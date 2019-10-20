/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Dialogs.module.css';
import Dialog_items from './Dialog-items/Dialog_items';
import Messages from './Messages/Messages';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <Dialog_items />
      <Messages />
    </div>
    
  )
}

export default Dialogs;