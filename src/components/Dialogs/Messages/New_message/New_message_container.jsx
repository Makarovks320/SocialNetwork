/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { updateMessageBodyActionCreator, addMessageActionCreator } from '../../../../redux/messages_reducer';
import New_message from './New_message';

const New_message_container = (props) => {

  let onNewMessageChange =(text) => {
    let action = updateMessageBodyActionCreator(text);
    props.store.dispatch(action);
  }

  let onSendMessageClick = () => {
    let action = addMessageActionCreator();
    props.store.dispatch(action);
  }

  let newMessageBody = props.store.getState().messagesPage.newMessageBody

  return (
    <New_message updateMessageBody={onNewMessageChange} 
    sendMessage = {onSendMessageClick}
    newMessageBody={newMessageBody}/>
  )
}

export default New_message_container;
