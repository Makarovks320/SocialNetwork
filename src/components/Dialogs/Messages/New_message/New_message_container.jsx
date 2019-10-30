/* eslint-disable react/jsx-pascal-case */
import { updateMessageBodyActionCreator, addMessageActionCreator } from '../../../../redux/messages_reducer';
import New_message from './New_message';
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

const New_message_container = connect(mapStateToProps, mapDispatchToProps)(New_message)

export default New_message_container;
