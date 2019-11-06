import React from 'react';
import { connect } from 'react-redux';
import { followStatusChange, setUsers, setTotalUsersCount, 
  setCurrentPage, toggleIsFetching } from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import getUsers from '../../api/api';

class UsersAPIComponent extends React.Component {
  componentDidMount () {
    this.props.toggleIsFetching(true)
   getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
   getUsers(pageNumber, this.props.pageSize)
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
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, 
  {followStatusChange, setUsers, setTotalUsersCount,
  setCurrentPage, toggleIsFetching})(UsersAPIComponent);