import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { addPost, updatePost } from './state';

export let rerenderEntireTree = (props) => {
  ReactDOM.render( < App state = {props.state} addPost = {addPost} updatePost = {updatePost}/>,
    document.getElementById('root'));
}
