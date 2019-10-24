import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="main">
          <Route path='/profile' render={() => <Profile state = {props.state.profilePage} 
            dispatch = {props.dispatch}/>}/>
          <Route path='/dialogs'render={() => <Dialogs messagesPage = {props.state.messagesPage}
          dispatch = {props.dispatch}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
