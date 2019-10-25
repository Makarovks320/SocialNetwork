/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import s from './Profile.module.css';
import Personal_Description from './Personal_Description/Personal_Description';
import Posts from './Posts/Posts';
import New_post_container from './New_post/New_post_container';

const Profile = (props) => {
  return (
    <main className={s.content}>  
      <Personal_Description/>
      <New_post_container store = {props.store}/>
      <Posts posts={props.store.getState().profilePage.posts}/>
      </main>
  )
}

export default Profile;
