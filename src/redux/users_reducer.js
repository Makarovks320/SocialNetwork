const FOLLOW_STATUS_CHANGE = 'FOLLOW_STATUS_CHANGE'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
  users: [],
  totalUsersCount: 1,
  pageSize: 10,
  currentPage: 1,
  isFetching: false
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
      return {...state, users: action.users}

    case 'SET_TOTAL_USERS_COUNT':
      return {...state, totalUsersCount: action.count}
    
    case 'SET_CURRENT_PAGE':
      return {...state, currentPage: action.currentPage}

    case 'TOGGLE_FETCHING':
      return {...state, isFetching: action.isfetching}

  default:
  return state;
}
}

export const followStatusChange = (userId) => ({ type: FOLLOW_STATUS_CHANGE, userId: userId})

export const setUsers = (userslist) => ({type: SET_USERS, users: userslist})

export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count: count})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const toggleIsFetching = (isfetching) => ({type: TOGGLE_FETCHING, isfetching})

export default usersReducer;