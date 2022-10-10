import React from 'react';
import { FaUsers } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { IoMdAnalytics, IoMdCreate } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { Link } from "react-router-dom";
import style from "./sidebar.module.scss";

const Sidebar = () => {
  return (
    <>
        <div className={style.main}>
            <div className={style.con}>
                {/* <div className={style.head}>
                    <h1>DICT</h1>
                </div> */}
                <div className={style.list}>
                    <ol>
                        <li>
                            <Link className={style.link} to="/">
                                <span><span className={style.icon}><IoMdAnalytics/></span> <p>analisys</p></span>
                            </Link>
                        </li>
                        <li>
                            <Link className={style.link} to="/entry">
                                <span><span className={style.icon}><IoMdCreate/></span> <p>entry</p></span>
                            </Link>
                        </li>
                        <li>
                            <Link className={style.link} to="/query">
                                <span><span className={style.icon}><GiArchiveResearch/></span> <p>query</p></span>
                            </Link>
                        </li>
                        <li>
                            <Link className={style.link} to="/config">
                                <span><span className={style.icon}><VscSettings/></span> <p>config</p></span>
                            </Link>
                        </li>
                        <li>
                            <Link className={style.link} to="/appointment">
                                <span><span className={style.icon}><FaUsers/></span> <p>appointment</p></span>
                            </Link>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar