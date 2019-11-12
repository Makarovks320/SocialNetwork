import React from 'react';
import PersonalDescription from './PersonalDescription/PersonalDescription';
import Posts from './Posts/Posts';
import NewPostContainer from './NewPost/NewPostContainer';

const Profile = (props) => {
  return (
    <main>  
      <PersonalDescription profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <NewPostContainer />
      <Posts posts={props.posts}/>
      </main>
  )
}

export default Profile;
