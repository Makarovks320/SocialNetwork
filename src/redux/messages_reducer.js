const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'

const messagesReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_MESSAGE':
      debugger
        let newMessage = {
          id: +state.messages[state.messages.length-1].id+1,
          author_id: '0',
          message: state.newMessageBody,
        }
        if (state.newMessageBody !== '') {
        state.messages.push(newMessage);
        state.newMessageBody = '';
        }
        return state;
    case 'UPDATE_MESSAGE_BODY':
        state.newMessageBody = action.newMessageBody;
        return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE});

export const updateMessageBodyActionCreator = (text) => ({ type: UPDATE_MESSAGE_BODY, newMessageBody: text});

export default messagesReducer;