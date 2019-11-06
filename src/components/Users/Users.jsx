import React from 'react';
import {NavLink} from 'react-router-dom'
import * as axios from 'axios';
import Button from "react-bootstrap/Button";
import s from './Users.module.css'
import userPic from '../../img/genericUser.png'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
    return (
      
      <div>
        {pages.map((p) => {
          return (
          <span className={ props.currentPage===p && s.selectedPage} key={p}
          onClick={()=>props.onPageChanged(p)}>{p} </span>
          )
        })
      }
        
      {props.users.map(u => <div className={s.wrapper} key={u.id}>
        <div className="row justify-content-start">
          <div className="col">
            <div className={s.avatar}>
              <NavLink to={'/profile/'+ u.id}>
                  <img src={u.photos.small != null ? u.photos.small : userPic} alt="avatar" />
              </NavLink>
            </div>

            {u.followed ?
            <Button onClick={ () => {
              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, 
              {
                withCredentials: true,
                headers: {
                  'API-KEY': 'e7349e98-057b-40d9-9127-715983016ca8'
                }
              })
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.followStatusChange(u.id)}
                })
              }
              }>Unfollow</Button>:
            <Button onClick={ () => {
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, 
              {
                withCredentials: true,
                headers: {
                  'API-KEY': 'e7349e98-057b-40d9-9127-715983016ca8'
                }
              })
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.followStatusChange(u.id)}
                })
              }
              }>Follow</Button>}
          </div>
          <div className="col">
              <div className={s.info + " row"}>
                <div className={'row'} >
                  <div className="col">
                    <div>{u.name}</div>
                  </div>
                  <div className="col">
                    <div>{u.status}</div>  
                  </div>
                </div>
              </div>
          </div>
        </div>
        </div>)}
      </div>)

}

export default Users;