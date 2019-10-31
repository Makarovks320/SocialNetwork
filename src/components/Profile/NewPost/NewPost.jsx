import React from 'react';
import s from './NewPost.module.css';


const NewPost = (props) => {
let onAddPostClick = () => {
  props.addPost();
}

let onPostChange =(e) => {
  let text = e.target.value;
  props.updatePostText(text);
}

  return (
    <div className={s.new_post_container}>
      <div className={s.wrapper}>
        <img className={s.avatar} alt="avatar" 
        src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="50px"/>
        <textarea onChange={onPostChange} value={props.newPostText} placeholder="Write your post here..."/>
      </div>
      <button onClick = {onAddPostClick}>Post</button>
    </div>
  )
}

export default NewPost;
