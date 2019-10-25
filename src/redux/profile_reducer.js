const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST': 
      let newPost = {
        id: +state.posts[0].id + 1,
        datetime: '2019-11-18T09:54',
        author: 'Anastacia Zavorotnyuk',
        text: state.newPostText,
        likesCount: 0
      }
      if (state.newPostText !== '') {
        state.posts.unshift(newPost);
        state.newPostText = '';
      }
      return state;

    case 'UPDATE_POST': 
      state.newPostText = action.newText;
      return state;

  default:
  return state;
}
}

export const addPostActionCreator = () => ({ type: ADD_POST});

export const updatePostActionCreator = (text) => ({ type: UPDATE_POST, newText: text});

export default profileReducer;