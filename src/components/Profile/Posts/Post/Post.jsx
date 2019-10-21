import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.wrapper}>
        <div className={s.thumbnail}><img className={s.avatar} alt="avatar" 
          src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="100%" /></div>
        <div className={s.post_info}>
          <span>{props.author}</span>
          <time>{props.datetime}</time>
        </div>
      </div>
      <div className={s.content}>
        {props.text}
      </div>
      <div className={s.likesCount}>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  )
}

export default Post;
