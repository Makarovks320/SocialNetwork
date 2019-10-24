import React from 'react';
import s from './New_message.module.css';
import { updateMessageBodyActionCreator, addMessageActionCreator } from '../../../../redux/state';


const New_message = (props) => {

let onButtonClick = () => {
  let action = addMessageActionCreator();
  props.dispatch(action);
}

let onNewMessageChange =(e) => {
  let text = e.target.value;
  let action = updateMessageBodyActionCreator(text);
  props.dispatch(action);
}

  return (
    <div className={s.new_message_container}>
      <div className={s.wrapper}>
        <img className={s.avatar} alt="avatar" 
        src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="50px"/>
        <textarea onChange={onNewMessageChange} 
        value={props.messagesPage.newMessageBody}/>
      </div>
      <button onClick = {onButtonClick}>Send</button>
    </div>
  )
}

export default New_message;
