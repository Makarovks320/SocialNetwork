import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

const Profile = ({profile, status, updateStatus, addPost, posts}) => {
  return (
    <main>  
      <ProfileDescription profile={profile} status={status} updateStatus={updateStatus}/>
      <NewPost addPost={addPost}/>
      <Posts posts={posts}/>
      </main>
  )
}

export default Profile;
