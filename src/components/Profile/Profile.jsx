import React from 'react';
import s from './Profile.module.css';
import PersonalDescription from './PersonalDescription/PersonalDescription';
import Posts from './Posts/Posts';
import NewPostContainer from './NewPost/NewPostContainer';

const Profile = (props) => {
  return (
    <main className={s.content}>  
      <PersonalDescription/>
      <NewPostContainer store = {props.store}/>
      <Posts posts={props.store.getState().profilePage.posts}/>
      </main>
  )
}

export default Profile;
