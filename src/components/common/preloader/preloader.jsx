import React from 'react';
import s from './preloader.module.css';


const Preloader = () => {
return (
  <div className={s.overlay}>
    <div className={s.preloader}>
      <div>
        Loading...please wait
      </div>
    </div>
  </div>
)}
export default Preloader;
