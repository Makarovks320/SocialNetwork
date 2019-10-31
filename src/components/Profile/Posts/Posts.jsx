import React from 'react';
import Post from './Post/Post';


  
const Posts = (props) => {
  let postsElements = props.posts.map((p) => <Post key={p.id} datetime={p.datetime}
  author={p.author} text={p.text} likesCount={p.likesCount}/>)
  
  return (
    <div>
      {postsElements}
    </div>
  )
}

export default Posts;