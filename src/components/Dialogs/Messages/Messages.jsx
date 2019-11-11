import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import NewMessageContainer from './NewMessage/NewMessageContainer';


const Messages = (props) => {
  let messages_elements = props.messages
  .map(m => <Message key={m.id} message={m.message} 
    author_id={m.author_id} />);

    return (
      <div>
        <div className={s.messages}>
          {messages_elements}
        </div>
        <NewMessageContainer />
      </div>
    )
}

export default Messages;