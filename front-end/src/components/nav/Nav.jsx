import React from 'react';
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/Logo png.png";
import style from "./nav.module.scss";
const Nav = () => {
    const Navigate = useNavigate();
    const logout = ()=>{
        document.cookie = 'me=""';
        document.cookie = 'go=""';
        return Navigate("/login")
    }
  return (
    <>
        <div className={style.main}>
            <div className={style.con}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={style.text}>
                    <h1><span><FcBusinessman/></span> reception desk</h1>
                </div>
                <div className={style.log}>
                    <button onClick={logout}><span><MdOutlineLogout/></span> logout</button>
                </div>
            </div>
           
        </div>
    </>
  )
}

export default Nav