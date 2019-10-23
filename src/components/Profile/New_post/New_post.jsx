import React from 'react';
import s from './New_post.module.css';

const New_post = (props) => {
let textareaElement = React.createRef();
let onButtonClick = () => {
  props.addPost()
}

let onPostChange =() => {
  let text = textareaElement.current.value;
  props.updatePost(text);
}

  return (
    <div className={s.new_post_container}>
      <div className={s.wrapper}>
        <img className={s.avatar} alt="avatar" 
        src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="50px"/>
        <textarea ref={textareaElement} onChange={onPostChange} value={props.newPostText} placeholder="Write your post here..."/>
      </div>
      <button onClick = {onButtonClick}>Post</button>
    </div>
  )
}

export default New_post;
