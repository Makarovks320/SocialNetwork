import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';
import styled from "styled-components";
import {Field, reduxForm} from 'redux-form';

const GoToStyled = styled.form`
    display: inline;
    padding: .5rem;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 5px;

    label {
    display: inline;
    margin: 0;
    }
    
    input[type="number"] {
    width: 100px;
    margin: 0 5px;
    }
`
const GoToForm = ({handleSubmit, pagesCount}) => {
    return (
        <GoToStyled onSubmit={handleSubmit}>
            <label>
                Go to page:
                <Field className="inputPage" component="input" name="pageNumber" type="number" min="1" max={pagesCount}/>
            </label>
            <input type="submit" value="Go"/>
        </GoToStyled>
    )
}
const GoToReduxForm = reduxForm({form: 'goToPage'})(GoToForm)

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    const onSubmit = (formData) => {
        onPageChanged(formData.pageNumber)
    }
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    return (
        <div>
            <Pagination pagesCount={pagesCount}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        portionSize={5}/>

            <GoToReduxForm onSubmit={onSubmit}
                           pagesCount={pagesCount}/>

            {users.map(u => <User key={u.id}
                                  user={u}
                                  followingInProgress={props.followingInProgress}
                                  unfollowUser={props.unfollowUser}
                                  followUser={props.followUser}
                                  styles={props.styles}/>
            )}
        </div>)
}

export default Users;