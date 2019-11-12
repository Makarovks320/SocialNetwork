import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS ='SET_STATUS'

let initialState = {
  posts: [
    {
      id: 3,
      datetime: '2019-11-18T09:54',
      author: 'Anastacia Zavorotnyuk',
      text: 'Скиньте деньги на лечение, пожалуйста!',
      likesCount: '289'
    },
    {
      id: 2,
      datetime: '2017-11-18T09:54',
      author: 'Anastacia Zavorotnyuk',
      text: 'adsasdas',
      likesCount: '150'
    },
    {
      id: 1,
      datetime: '2016-11-18T09:54',
      author: 'Anastacia Zavorotnyuk',
      text: 'Post content: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi sed facilis eos, dolorum enim vel distinctio doloremque molest',
      likesCount: '64'
    }
  ],
  newPostText: '',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: +state.posts[0].id + 1,
        datetime: '2019-11-18T09:54',
        author: 'Anastacia Zavorotnyuk',
        text: state.newPostText,
        likesCount: 0
      }
      let stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      if (state.newPostText !== '') {
        stateCopy.posts.unshift(newPost);
        stateCopy.newPostText = '';
      }
      return stateCopy;
    }

    case UPDATE_POST:
      return {
        ...state,
        newPostText: action.newText
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

  default:
  return state;
}
}

export const addPostActionCreator = () => ({ type: ADD_POST});

export const updatePostActionCreator = (text) => ({ type: UPDATE_POST, newText: text});

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({ type: SET_STATUS, status});

export const getUserProfile = (userId) => {
  return (dispatch) => {
  usersAPI.getProfile(userId).then (data => {
    dispatch(setUserProfile(data))
  })
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
  profileAPI.getStatus(userId).then (response => {
    dispatch(setStatus(response.data))
  })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
  profileAPI.updateStatus(status).then (response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
    else {
      console.log('error status update')
    }
  })
  }
}

export default profileReducer;