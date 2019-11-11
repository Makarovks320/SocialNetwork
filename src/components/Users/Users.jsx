import React from 'react';
import {NavLink} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import s from './Users.module.css'
import userPic from '../../img/genericUser.png'
import {Info} from './styles'

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
          <span className={ props.currentPage===p ? s.selectedPage : ''} key={p}
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
            <Button disabled={props.followingInProgress.some(id=>id === u.id)}
            onClick={ () => {props.unfollowUser(u.id)}}>Unfollow</Button>:
            <Button disabled={props.followingInProgress.some(id=>id === u.id)}
            onClick={ () => {props.followUser(u.id)}}>Follow</Button>
            }
          </div>
          <div className="col">
              <Info isFollowed={u.followed}>
                <div className={'row'} >
                  <div className="col">
                    <div>{u.name}</div>
                  </div>
                  <div className="col">
                    <div>{u.status}</div>  
                  </div>
                </div>
              </Info>
          </div>
        </div>
        </div>)}
      </div>)

}

export default Users;