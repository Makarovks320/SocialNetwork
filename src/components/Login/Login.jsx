import React from 'react';
import {Redirect} from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { logIn } from '../../redux/auth_reducer';
import s from '../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Input} name="email" validate={[required]} placeholder="email"/>
        </div>
        <div>
          <Field component={Input} name="password" validate={[required]} placeholder="password" type="password"/>
        </div>
        <div>
          <Field component={Input} name="rememberMe" type="checkbox"/>remember me
        </div>
        {props.error && <span className={s.summaryError}>
          {props.error}
        </span>}
        <div><button>Log in</button></div>
      </form>
  )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.logIn(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth === true) {
    return <Redirect to={"/profile"}/>
  }
  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect ( mapStateToProps, {logIn}) (Login)
