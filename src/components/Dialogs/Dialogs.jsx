import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from './Dialog-items/DialogItems';
import Messages from './Messages/Messages';
import {reduxForm, Field} from 'redux-form'

const NewMessageForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <Field component ='textarea' name='newMessageBody' placeholder='Write your message here...'/>
      <button>Send</button>
  </form>)  
}

const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessageForm)

const Dialogs = (props) => {
  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody)
  }
  return (
    <div>
      <div className={s.dialogs}>
      <DialogItems dialogs={props.dialogs}/>
      <Messages messages = {props.messages}/>
      </div>
      <div className={s.new_message_container}>
      <div className={s.wrapper}>
        <div className={s.thumbnail}>
          <img className={s.avatar} alt="avatar" 
          src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="50px"/>
        </div>
      <NewMessageReduxForm onSubmit={addNewMessage}/>
      </div>
    </div>
    </div>
    
  )
}

export default Dialogs