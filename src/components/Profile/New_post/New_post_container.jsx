/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { updatePostActionCreator, addPostActionCreator } from '../../../redux/profile_reducer';
import New_post from './New_post';


const New_post_container = (props) => {

  let onPostChange = (text) => {
    let action = updatePostActionCreator(text);
    props.store.dispatch(action);
  }
let addPost = () => {
  let action = addPostActionCreator();
  props.store.dispatch(action);
}

let newPostText = props.store.getState().profilePage.newPostText;

  return (
    <New_post updatePostText={onPostChange} addPost={addPost} newPostText={newPostText}/>
  )
}

export default New_post_container;
