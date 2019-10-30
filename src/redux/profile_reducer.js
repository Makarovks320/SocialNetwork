const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'

let initialState = {
  posts: [
    {
      id: '3',
      datetime: '2019-11-18T09:54',
      author: 'Anastacia Zavorotnyuk',
      text: 'Скиньте деньги на лечение, пожалуйста!',
      likesCount: '289'
    },
    {
      id: '2',
      datetime: '2017-11-18T09:54',
      author: 'Anastacia Zavorotnyuk',
      text: 'adsasdas',
      likesCount: '150'
    },
    {
      id: '1',
      datetime: '2016-11-18T09:54',
      author: 'Anastacia Zavorotnyuk',
      text: 'Post content: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi sed facilis eos, dolorum enim vel distinctio doloremque molest',
      likesCount: '64'
    }
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST': {
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

    case 'UPDATE_POST':
      let stateCopy = {...state}
      debugger
      stateCopy.newPostText = action.newText;
      return stateCopy;

  default:
  return state;
}
}

export const addPostActionCreator = () => ({ type: ADD_POST});

export const updatePostActionCreator = (text) => ({ type: UPDATE_POST, newText: text});

export default profileReducer;