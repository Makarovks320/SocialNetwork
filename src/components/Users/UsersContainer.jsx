import { connect } from 'react-redux';
import { followStatusChangeAC, setUsersAC, setTotalUsersCountAC, 
  setCurrentPageAC } from '../../redux/users_reducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followStatusChange: (userId) => dispatch(followStatusChangeAC(userId)),
    setUsers: (userslist) => dispatch(setUsersAC(userslist)),
    setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCountAC(usersCount)),
    setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber))
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;