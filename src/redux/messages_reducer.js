const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'

let initialState = {
  dialogs: [{
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
  messages: [{
      id: 1,
      message: "Плоти нологе!",
      author_id: 1
    },
    {
      id: 2,
      message: "Let's grab a bite!",
      author_id: 2
    },
    {
      id: 3,
      message: "For you and for Sashka!",
      author_id: 3
    },
    {
      id: 4,
      message: "The less a woman we love, the easier she likes us...",
      author_id: 4
    },
    {
      id: 5,
      message: "Let's drink?!",
      author_id: 5
    },
  ],
  newMessageBody: '',
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_MESSAGE': {
      let newMessage = {
        id: +state.messages[state.messages.length - 1].id + 1,
        author_id: '0',
        message: state.newMessageBody,
      }
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages]
      if (state.newMessageBody !== '') {
        stateCopy.messages.push(newMessage);
        stateCopy.newMessageBody = '';
      }
      return stateCopy;
    }
    case 'UPDATE_MESSAGE_BODY':
      let stateCopy = {...state}
      debugger
      stateCopy.newMessageBody = action.newMessageBody;
      debugger
      return stateCopy;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
});

export const updateMessageBodyActionCreator = (text) => ({
  type: UPDATE_MESSAGE_BODY,
  newMessageBody: text
});

export default messagesReducer;