import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import Posts from './Posts/Posts';
import NewPostContainer from './NewPost/NewPostContainer';

const Profile = (props) => {
  return (
    <main>  
      <ProfileDescription profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <NewPostContainer />
      <Posts posts={props.posts}/>
      </main>
  )
}

export default Profile;
