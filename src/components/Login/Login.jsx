import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component="input" name="Login" placeholder="Login"/>
        </div>
        <div>
          <Field component="input" name="Password" placeholder="Password"/>
        </div>
        <div>
          <Field component="input" name="rememberMe" type="checkbox"/>remember me
        </div>
        <div><button>Log in</button></div>
      </form>
  )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    // здесь можем делать что угодно, например, задиспатчить thunk.
  }
  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}
export default Login
