import React from 'react';
import Nav from "../nav/Nav";
import Sidebar from '../sidebar/Sidebar';
import style from "./layout.module.scss";
const Layout = ({El}) => {
  return (
    <>
        <div className={style.main}>
            <div className={style.top}>
                <Nav/>
            </div>
            <div className={style.sidebar}>
            <Sidebar/>
            </div>
            <div className={style.con}>
              <El/>
            </div>
        </div>
    </>
  )
}

export default Layout