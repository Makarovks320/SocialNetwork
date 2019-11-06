import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="main">
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs'render={() => <Dialogs store = {props.store}/>}/>
          <Route path='/users'render={() => <UsersContainer/>}/>
        </div>
      </div>
  );
}



export default App;
