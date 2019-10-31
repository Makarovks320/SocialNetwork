import React from 'react';
import s from './PersonalDescription.module.css';

const PersonalDescription = () => {
  return (
    <div className={s.personal_data}>
        <img className={s.avatar} alt="avatar" 
        src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="150px" />
        <table className={s.table}>
            <caption>
            Personal information:
            </caption>
            <tbody>
                <tr>
                    <td>First name:</td>
                    <td>Anastacia</td>
                </tr>
                <tr>
                    <td>Second name:</td>
                    <td>Zavorotnyuk</td>
                </tr>
                <tr>
                    <td>Current city:</td>
                    <td>Moscow</td>
                </tr>
                <tr>
                    <td>Languages:</td>
                    <td>Russian</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PersonalDescription;
