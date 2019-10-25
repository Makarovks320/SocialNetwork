import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


function App(props) {
  debugger
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="main">
          <Route path='/profile' render={() => <Profile store = {props.store}/>}/>
          <Route path='/dialogs'render={() => <Dialogs store = {props.store}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
