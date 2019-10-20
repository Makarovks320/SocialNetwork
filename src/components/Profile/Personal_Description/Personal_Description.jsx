import React from 'react';
import s from './Personal_Description.module.css';

const Personal_Description = () => {
  return (
    <div className={s.personal_data}>
        <img className={s.avatar} alt="avatar" 
        src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="150px" />
        <table class={s.table}>
            <caption>
            Personal information:
            </caption>
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
        </table>
    </div>
  )
}

export default Personal_Description;
