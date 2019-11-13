import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsForAuthRedirect = (state) => ({
  isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
      class RedirectComponent extends React.Component {
      render() {
        console.log(this.props)
        if (!this.props.isAuth) {return <Redirect to='/login' />}
        return <Component {...this.props}/>
      }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForAuthRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}

