import React from 'react';
import s from './New_message.module.css';
import { updateNewMessageActionCreator } from '../../../../redux/state';


const New_message = (props) => {
let textareaElement = React.createRef();
let onButtonClick = () => {
  // props.dispatch(addNewMessageActionCreator());
  console.log('asd')
}

let onNewMessageChange =() => {
  let text = textareaElement.current.value;
  props.dispatch(updateNewMessageActionCreator(text));
  console.log('asd')
}

  return (
    <div className={s.new_message_container}>
      <div className={s.wrapper}>
        <img className={s.avatar} alt="avatar" 
        src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="50px"/>
        <textarea ref={textareaElement} onChange={onNewMessageChange} value={props.newMessageBody}/>
      </div>
      <button onClick = {onButtonClick}>Send</button>
    </div>
  )
}

export default New_message;
