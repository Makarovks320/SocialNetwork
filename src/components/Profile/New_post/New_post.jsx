import React from 'react';
import s from './New_post.module.css';

const New_post = (props) => {
let textareaElement = React.createRef();
let onButtonClick = () => {
  let text = textareaElement.current.value;
  props.addPost(text);
}

  return (
    <div className={s.new_post_container}>
      <div className={s.wrapper}>
        <img className={s.avatar} alt="avatar" src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="50px"/>
        <textarea ref={textareaElement} placeholder="Write your post here..."></textarea>
      </div>
      <button onClick = {onButtonClick}>Post</button>
    </div>
  )
}

export default New_post;
