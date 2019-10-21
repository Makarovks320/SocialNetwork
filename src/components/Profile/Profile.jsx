/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Profile.module.css';
import Personal_Description from './Personal_Description/Personal_Description';
import New_post from './New_post/New_post';
import Posts from './Posts/Posts';

const Profile = (props) => {
  return (
    <main className={s.content}>  
      <Personal_Description/>
      <New_post addPost={props.addPost}/>
      <Posts posts={props.state.posts}/>
      </main>
  )
}

export default Profile;
