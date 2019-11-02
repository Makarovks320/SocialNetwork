import React from 'react';
import Button from "react-bootstrap/Button";
import s from './Users.module.css'
import * as axios from 'axios'
import userPic from '../../img/genericUser.png'

class Users extends React.Component {
  constructor (props) {
    super(props);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users`).then(response => {
        this.props.setUsers(response.data.items)
      })
  }
  
  render() {
    return (
      <div>
        
      {this.props.users.map(u => <div className={s.wrapper} key={u.id}>
        <div className="row justify-content-start">
          <div className="col">
            <div className={s.avatar}>
              
                  <img src={u.photos.small != null ? u.photos.small : userPic} alt="avatar" />
            </div>

                  {u.followed ?
                  <Button onClick={()=>{this.props.followStatusChange(u.id)}}>Unfollow</Button>:
                  <Button onClick={()=>{this.props.followStatusChange(u.id)}}>Follow</Button>}
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
}

export default Users;