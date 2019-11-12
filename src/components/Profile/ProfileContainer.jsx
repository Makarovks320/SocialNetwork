import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateStatus } from '../../redux/profile_reducer';
import {withRouter} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount () {
    let userId = this.props.match.params.userId;
    if (!userId){ userId = 5081};
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return ( 
        <Profile {...this.props}/>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  posts: state.profilePage.posts,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
  withRouter,
  withAuthRedirect)(ProfileContainer)
