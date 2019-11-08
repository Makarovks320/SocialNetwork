import React from 'react';
import PersonalDescription from './PersonalDescription/PersonalDescription';
import Posts from './Posts/Posts';
import NewPostContainer from './NewPost/NewPostContainer';

const Profile = (props) => {
  return (
    <main>  
      <PersonalDescription profile={props.profile}/>
      <NewPostContainer />
      <Posts posts={props.posts}/>
      </main>
  )
}

export default Profile;
