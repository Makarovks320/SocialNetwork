import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

const Profile = ({profile, status, updateStatus, addPost, posts, styles, isOwner, saveAvatar}) => {
  
  debugger
  return (
    <main>  
      <ProfileDescription isOwner={isOwner}
                          saveAvatar={saveAvatar}
                          profile={profile}
                          status={status}
                          updateStatus={updateStatus}
                          styles={styles}/>
      <NewPost addPost={addPost} styles={styles}/>
      <Posts posts={posts} styles={styles}/>
    </main>
  )
}

export default Profile;
