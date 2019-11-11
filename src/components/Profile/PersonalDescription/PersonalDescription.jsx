import React from 'react';
import s from './PersonalDescription.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';

const PersonalDescription = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
  return (
    <div className={s.personal_data}>
        <img className={s.avatar} alt="avatar" 
        // src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="150px" />
        src={props.profile.photos.large} width="150px" />
        <table className={s.table}>
            <caption>
            Personal information:
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
        <ProfileStatus status='sasdasasasdas'/>
    </div>
  )
}

export default PersonalDescription;
