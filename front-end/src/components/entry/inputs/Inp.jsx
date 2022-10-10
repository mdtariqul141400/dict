import React from 'react';
import style from './inp.module.scss';

const Inp = ({name,value,set}) => {
  return (
    <div className={style.main}>
        <label>{name}:</label><br></br>
        <input value={value} onChange={(e)=>{set(e.target.value)}} type="text" />
    </div>
  )
}

export default Inp