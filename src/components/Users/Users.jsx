import React from 'react';
import Button from "react-bootstrap/Button";
import s from './Users.module.css'

const Users = (props) => {
  if(props.users.length === 0) {
    props.setUsers([
      {user_id: 1, photoURL:'https://www.meme-arsenal.com/memes/71e6d6dfb9fbf98491ff294101718c2b.jpg',
      followed: true, name: 'Leonid M.', surname:'Mandela', status: 'vsem privet!', 
      location: {
        city: 'Chernobyl',
        country: 'Ukraine'}
      },
      {user_id: 2, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT92p1s9hXXO5edlOhGO4X4ZOjmzyAlXyGH4GqiwwyXOyJFI7k',
      followed: true, name: 'Viktoria', surname:'Prygina', status: 'vsem privet!', 
      location: {
        city: 'Sochi',
        country: 'Russia'}
      },
      {user_id: 3, photoURL:'http://lurkmore.so/images/thumb/4/4d/Yao_Ming.jpg/200px-Yao_Ming.jpg',
      followed: false, name: 'Ubegasta', surname:'Vasin', status: 'vsem privet!', 
      location: {
        city: 'Lipetsk',
        country: 'Russia'}
      },
      {user_id: 4, photoURL:'https://whatsism.com/uploads/posts/2018-05/1525434243_1489708381_nu-davai-rasskazhi-mne.jpg',
      followed: false, name: 'Serega', surname:'Best', status: 'vsem privet!', 
      location: {
        city: 'Chernobyl',
        country: 'USSR'}
      }
    ])
  }

  return (
    <div>

      <span className={s.head}>Users</span>
      
    {props.users.map(u => <div className={s.wrapper} key={u.user_id}>
      <div className="row justify-content-start">
        <div className="col">
          <div className={s.avatar}>
                <img src={u.photoURL} alt="avatar" />
          </div>
                {u.followed ?
                <Button onClick={()=>{props.followStatusChange(u.user_id)}}>Unfollow</Button>:
                <Button onClick={()=>{props.followStatusChange(u.user_id)}}>Follow</Button>}
        </div>
        <div className="col">
            <div className={s.info + " row"}>
              <div className={'row'} >
                <div className="col">
                  <div>{u.name}</div>
                  <div>{u.surname}</div>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>  
                </div>
                <div className="col">
                  <div>{u.status}</div>  
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>)}
    </div>)}

export default Users;