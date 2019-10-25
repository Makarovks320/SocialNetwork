/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import New_message from './New_message/New_message';
import New_message_container from './New_message/New_message_container';


const Messages = (props) => {
  let messages_elements = props.store.getState().messagesPage.messages
  .map(m => <Message id={m.id} message={m.message} 
    author_id={m.author_id} />);

    return (
      <div>
        <div className={s.messages}>
          {messages_elements}
        </div>
        <New_message_container store = {props.store}/>
      </div>
    )
}

export default Messages;