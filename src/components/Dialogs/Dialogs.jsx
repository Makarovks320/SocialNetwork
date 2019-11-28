import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './Dialog-items/DialogItems';
import Messages from './Messages/Messages';
import { NewPostContainer } from '../Profile/NewPost/NewPostContainer';

const Dialogs = (props) => {
  const addNewMessage = (formData) => {
    debugger
    props.sendMessage(formData.newBody)
  }
  return (
    <div>
      <div className={s.dialogs}>
      <DialogItems dialogs={props.dialogs}/>
      <Messages messages = {props.messages}/>
      </div>
    <NewPostContainer styles={props.styles} onSubmit={addNewMessage}/>
    </div>
    
  )
}

export default Dialogs