import { connect } from 'react-redux';
import { followStatusChangeAC, setUsersAC } from '../../redux/users_reducer';
import Users from './Users';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followStatusChange: (userId) => dispatch(followStatusChangeAC(userId)),
    setUsers: (userslist) => dispatch(setUsersAC(userslist))
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;