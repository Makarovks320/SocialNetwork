import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './Dialog-items/DialogItems';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <DialogItems dialogs={props.store.getState().messagesPage.dialogs}/>
      <Messages store = {props.store}/>
    </div>
    
  )
}

export default Dialogs;