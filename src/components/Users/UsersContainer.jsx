import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, requestUsers, followUser, unfollowUser } from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { getUsers, getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users_selectors';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
  componentDidMount () {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.requestUsers(pageNumber, this.props.pageSize)
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
// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     pageSize: state.usersPage.pageSize,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {setCurrentPage, requestUsers, followUser, unfollowUser})
)(UsersContainer)
