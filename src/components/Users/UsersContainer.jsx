import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getUsers, followUser, unfollowUser } from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersAPIComponent extends React.Component {
  componentDidMount () {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)
  }
  render() {

    return (<div>
      { this.props.isFetching ? <Preloader/> : null}
      
      <Users totalUsersCount = {this.props.totalUsersCount} pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage} users = {this.props.users}
        onPageChanged = {this.onPageChanged}
        followingInProgress={this.props.followingInProgress}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
       />
       </div>
    )
}
}
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {setCurrentPage, getUsers, followUser, unfollowUser})
)(UsersAPIComponent)
