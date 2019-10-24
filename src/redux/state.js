const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'
let store = {
  _subscriber(){
    console.log('no subscribers')
  },
  _state: {
    profilePage: {
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
    },
    messagesPage: {
      dialogs: [
        {
          name: "Volodya",
          surname: "Putler",
          author_id: "1",
        },
        {
          name: "Louis",
          surname: "Suarez",
          author_id: "2",
        },
        {
          name: "Evgen",
          surname: "Bajenov",
          author_id: "3",
        },
        {
          name: "Alexander",
          surname: "Pushkin",
          author_id: "4",
        },
        {
          name: "Bari",
          surname: "Alibasov",
          author_id: "5",
        }
      ],  
      messages: [
        { id: 1,
          message: "Плоти нологе!",
          author_id: 1},
        { id: 2,
          message: "Let's grab a bite!",
          author_id: 2},
        { id: 3,
          message: "For you and for Sashka!",
          author_id: 3},
        { id: 4,
          message: "The less a woman we love, the easier she likes us...",
          author_id: 4},
        { id: 5,
          message: "Let's drink?!",
          author_id: 5},
      ],
      newMessageBody: '',
    }
  },

  subscribe(callBack) {
    this._subscriber = callBack;
  },
  getState () {
    return this._state;
  },
  _addPost() {
    let newPost = {
      id: +this._state.profilePage.posts[0].id+1,
      datetime: '2019-11-18T09:54',
      author: 'Anastacia Zavorotnyuk',
      text: this._state.profilePage.newPostText,
      likesCount: 0
    }
    if (this._state.profilePage.newPostText !== '') {
    this._state.profilePage.posts.unshift(newPost);
    this._state.profilePage.newPostText = '';
    this._subscriber(this._state);
    }
  },
  _updatePost (newText) {
    this._state.profilePage.newPostText = newText;
    this._subscriber(this._state);
    console.log(this._state.profilePage.newPostText);
  },
  _addMessage() {
    let shortLink = this._state.messagesPage;
    let newMessage = {
      id: +shortLink.messages[shortLink.messages.length-1].id+1,
      author_id: '0',
      message: shortLink.newMessageBody,
    }
    if (shortLink.newMessageBody !== '') {
    shortLink.messages.push(newMessage);
    shortLink.newMessageBody = '';
    this._subscriber(this._state);
    }
  },
  _updateMessageBody (newText) {
    this._state.messagesPage.newMessageBody = newText;
    this._subscriber(this._state);
  },
  dispatch(action){
    switch (action.type) {
    case 'ADD_POST':
      this._addPost();
      break;
    case 'UPDATE_POST':
      this._updatePost(action.newText);
      break;
    case 'ADD_MESSAGE':
      this._addMessage();
      break;
    case 'UPDATE_MESSAGE_BODY':
      this._updateMessageBody(action.newMessageBody);
      break;
    default:
      break;
  }
}
}
export const addPostActionCreator = () => ({ type: ADD_POST});

export const updatePostActionCreator = (text) => ({ type: UPDATE_POST, newText: text});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE});

export const updateMessageBodyActionCreator = (text) => ({ type: UPDATE_MESSAGE_BODY, newMessageBody: text});


export default store;