import React from 'react';
import s from './FormsControls.module.css'
import {Field} from 'redux-form'
import {Form} from 'react-bootstrap'


const FormsControl = ({meta: {touched, error}, children}) => {
    const isError = (error && touched);
    return (
        <div className={s.formControl + ' ' + ( isError ? s.error : '')}>
            {children}
            {isError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    const newMeta = {};
    for (let key in meta) {
        newMeta[key.toLowerCase()] = meta[key] + ''
    }
    return <FormsControl {...props}>
        <Form.Control {...input} {...newMeta} {...restProps} as="textarea" rows="2" />
    </FormsControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    const newMeta = {};
    for (let key in meta) {
        newMeta[key.toLowerCase()] = meta[key] + ''
    }
    return <FormsControl {...props}>
        <Form.Control {...input} {...newMeta} {...restProps}/>
    </FormsControl>
}

export const Check = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormsControl {...props}>
        <Form.Check {...input} {...restProps} value="false"/>
    </FormsControl>
}

export const createField = (component, name, validators, placeholder, type, label) => {
    return <Field component={component} name={name} validate={validators} placeholder={placeholder} type={type} label={label}/>
}