/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import New_message from './New_message/New_message';


const Messages = (props) => {
  let messages_elements = props.messagesPage.messages.map(m => <Message id={m.id} message={m.message} 
    author_id={m.author_id} />);

    return (
      <div>
        <div className={s.messages}>
          {messages_elements}
        </div>
        <New_message messagesPage = {props.messagesPage} dispatch = {props.dispatch}/>
      </div>
    )
}

export default Messages;