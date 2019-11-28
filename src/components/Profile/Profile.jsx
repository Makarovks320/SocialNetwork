import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

const Profile = ({profile, status, updateStatus, addPost, posts, styles}) => {
  return (
    <main>  
      <ProfileDescription profile={profile} status={status} updateStatus={updateStatus} styles={styles}/>
      <NewPost addPost={addPost} styles={styles}/>
      <Posts posts={posts} styles={styles}/>
    </main>
  )
}

export default Profile;
