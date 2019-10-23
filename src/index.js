
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { addPost, updatePost, subscriber } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let rerenderEntireTree = () => {
  ReactDOM.render( < App state = {state} addPost = {addPost} updatePost = {updatePost}/>,
    document.getElementById('root'));
}
rerenderEntireTree();
subscriber(rerenderEntireTree);

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();