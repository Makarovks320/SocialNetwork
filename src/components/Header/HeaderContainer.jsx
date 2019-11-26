import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/auth_reducer';
import HeaderNavbar from './HeaderNavbar';

class HeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <HeaderNavbar {...this.props}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { logOut })(HeaderContainer);
