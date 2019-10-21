import React from 'react';
import Post from './Post/Post';
// Пока что данные на с сервера, а здесь:


  
const Posts = (props) => {
  let postsElements = props.posts.map((p) => <Post id={p.id} datetime={p.datetime}
  author={p.author} text={p.text} likesCount={p.likesCount}/>)
  return (
    <div>
      {postsElements}
    </div>
  )
}

export default Posts;