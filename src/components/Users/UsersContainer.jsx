import React from 'react';
import { connect } from 'react-redux';
import { followStatusChange, setUsers, setTotalUsersCount, 
  setCurrentPage, toggleIsFetching, toggleFollowingProgress } from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import {usersAPI} from '../../api/api';

class UsersAPIComponent extends React.Component {
  componentDidMount () {
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
    .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      });
  }
  render() {

    return (<div>
      { this.props.isFetching ? <Preloader/> : null}
      
      <Users totalUsersCount = {this.props.totalUsersCount} pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage} users = {this.props.users}
        onPageChanged = {this.onPageChanged} followStatusChange = {this.props.followStatusChange}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(mapStateToProps, 
  {followStatusChange, setUsers, setTotalUsersCount,
  setCurrentPage, toggleIsFetching, toggleFollowingProgress})(UsersAPIComponent);