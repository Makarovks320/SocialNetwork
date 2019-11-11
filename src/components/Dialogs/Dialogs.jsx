import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './Dialog-items/DialogItems';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <DialogItems dialogs={props.dialogs}/>
      <Messages messages = {props.messages}/>
    </div>
    
  )
}

export default Dialogs;