import { updateMessageBodyActionCreator, addMessageActionCreator } from '../../../../redux/messages_reducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {newMessageBody: state.messagesPage.newMessageBody}
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageBody: (body) => {
      dispatch(updateMessageBodyActionCreator(body));
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer;
