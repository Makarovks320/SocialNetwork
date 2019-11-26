import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app_reducer';
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/preloader';
import { withSuspense } from './hoc/withSuspense';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render (){
    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="main">
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs'render={() => <DialogsContainer/>}/>
          <Route path='/users'render={withSuspense(UsersContainer)}/>
          <Route path='/login'render={() => <Login/>}/>
        </div>
      </div>
  );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect( mapStateToProps, { initializeApp })(App);