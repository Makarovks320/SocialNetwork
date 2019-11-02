const FOLLOW_STATUS_CHANGE = 'FOLLOW_STATUS_CHANGE'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: []
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW_STATUS_CHANGE':
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            u.followed = !u.followed
          }
          return u
        }),
      }

    case 'SET_USERS':
      return {...state,
      users: [...state.users, ...action.users]}
  default:
  return state;
}
}

export const followStatusChangeAC = (userId) => ({ type: FOLLOW_STATUS_CHANGE, userId: userId})

export const setUsersAC = (userslist) => ({type: SET_USERS, users: userslist})

export default usersReducer;