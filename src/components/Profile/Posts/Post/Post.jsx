import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.wrapper}>
        <img className={s.avatar} alt="avatar" 
          src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="50px" height="50px" />
        <div className={s.post_info}>
          <span>{props.author}</span>
          <time>{props.datetime}</time>
        </div>
      </div>
      <div className={s.content}>
        {props.text}
      </div>
    </div>
  )
}

export default Post;
