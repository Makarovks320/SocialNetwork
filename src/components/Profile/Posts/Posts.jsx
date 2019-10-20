import React from 'react';
import Post from './Post/Post';
// Пока что данные на с сервера, а здесь:
let posts = [
  {
    id: '3',
    datetime: '2019-11-18T09:54',
    author: 'Anastacia Zavorotnyuk',
    text: 'Скиньте деньги на лечение, пожалуйста!'
  },
  {
    id: '2',
    datetime: '2017-11-18T09:54',
    author: 'Anastacia Zavorotnyuk',
    text: 'adsasdas'
  },
  {
    id: '1',
    datetime: '2016-11-18T09:54',
    author: 'Anastacia Zavorotnyuk',
    text: 'Post content: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi sed facilis eos, dolorum enim vel distinctio doloremque molest'
  }
]
let postsElements = posts.map((p) => <Post id={p.id} datetime={p.datetime}
  author={p.author} text={p.text} />)
  
const Posts = () => {
  return (
    <div>
      {postsElements}
    </div>
  )
}

export default Posts;