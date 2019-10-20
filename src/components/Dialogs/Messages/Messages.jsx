import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';

let messages = [
  { id: 1,
    message: "Плоти нологе!",
    author_id: 1},
  { id: 2,
    message: "Let's grab a bite!",
    author_id: 2},
  { id: 3,
    message: "For you and for Sashka!",
    author_id: 3},
  { id: 4,
    message: "The less a woman we love, the easier she likes us...",
    author_id: 4},
  { id: 5,
    message: "Let's get some hype?!",
    author_id: 5},
]

let messages_elements = messages.map(m => <Message id={m.id} message={m.message} 
  author_id={m.author_id} />)

const Messages = () => {
  return (
    <div className={s.messages}>
      {messages_elements}
    </div>
  )
}

export default Messages;