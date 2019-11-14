import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

const Profile = (props) => {
  return (
    <main>  
      <ProfileDescription profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <NewPost addPost={props.addPost}/>
      <Posts posts={props.posts}/>
      </main>
  )
}

export default Profile;
