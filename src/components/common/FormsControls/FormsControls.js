import React from 'react';
import s from './FormsControls.module.css'
import { Field } from 'redux-form'
import { Form } from 'react-bootstrap'


const FormsControl = ({meta: {touched, error}, children}) => {
  const  isError = (error && touched);
  return (
    <div className={isError ? s.error : ''}>
      {children}
      { isError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormsControl {...props}><textarea {...input} {...meta} {...restProps}></textarea></FormsControl>
}

export const Input = (props) => {
  const {input, meta, ...restProps} = props;
  return <FormsControl {...props}>
          <Form.Control {...input} {...meta} {...restProps}/>
        </FormsControl>
}

export const createField = (component, name, validators, placeholder, type) => {
  return  <Field component={component} name={name} validate={validators} placeholder={placeholder} type={type}/>
}