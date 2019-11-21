import React from 'react';
import {Redirect} from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { Input, createField } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { logIn } from '../../redux/auth_reducer';
import s from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
  return (
      <form onSubmit={handleSubmit}>

        {createField(Input, "email", [required], "email")}
        {createField(Input, "password", [required], "password", "password")}
        {createField(Input, "email", [], "email", "checkbox", "remember me")}

        {error && <span className={s.summaryError}>
          {error}
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
