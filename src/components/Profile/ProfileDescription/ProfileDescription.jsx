import React from 'react';
import {PersonalData, FileChooser} from './PersonalData.styles';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import userPic from '../../../img/genericUser.png'

const ProfileDescription = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files[0]) {
            props.saveAvatar(e.target.files[0])
        }
    }
  return (
    <PersonalData styles={props.styles}>
        <div className="personalDataContainer">
        <div>
        <img className="avatar" alt="avatar" 
        // src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="150px" />
        src={props.profile.photos.large || userPic} width="150px"/>
        {props.isOwner && <FileChooser type="file" onChange={onMainPhotoSelected} styles={props.styles}>
                              <label class="container">update photo<input type="file"/></label>
                          </FileChooser>}
        </div>
        <table className="table">
            <caption>
            Profile information:
            </caption>
            <tbody>
                <tr>
                    <td>Full name:</td>
                    <td>{props.profile.fullName}</td>
                </tr>
                <tr>
                    <td>Status:</td>
                    <td>{props.profile.aboutMe}</td>
                </tr>
                <tr>
                    <td>lookingForAJob:</td>
                    <td>{props.profile.lookingForAJob ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                    <td>Description about job:</td>
                    <td>{props.profile.lookingForAJobDescription}</td>
                </tr>
            </tbody>
        </table>
        <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
        </div>
    </PersonalData>
  )
}

export default ProfileDescription;
