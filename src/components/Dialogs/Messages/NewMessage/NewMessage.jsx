import React from 'react';
import s from './NewMessage.module.css';

const NewMessage = (props) => {

let onSendMessageClick = () => {
  props.sendMessage();

}

let onMessageChange =(e) => {
  let text = e.target.value;
  props.updateMessageBody(text);
}

  return (
    <div className={s.new_message_container}>
      <div className={s.wrapper}>
        <div className={s.thumbnail}>
          <img className={s.avatar} alt="avatar" 
          src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="50px"/>
        </div>
        <textarea onChange={onMessageChange} 
        value={props.newMessageBody}/>
      </div>
      <button onClick = {onSendMessageClick}>Send</button>
    </div>
  )
}

export default NewMessage;
