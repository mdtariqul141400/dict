import axios from "axios";
import React from 'react';
import { AiOutlineFileAdd } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { RiUserSearchFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./query.module.scss";
import Table from './table/Table';

const Query = () => {
    const [tdata,settdata] = React.useState([]);
    const [value,setValue] = React.useState('');
    const navigat = useNavigate()
    React.useEffect(()=>{
        const getMonth = async ()=>{
            try {
                let res =await fetch("/getentrymonth");
                let data = await res.json()
                let status = res.status;
                if(status === 200){
                    settdata(data)
                }
            } catch (error) {
                toast.error("some thing is wrong!!")
            }
        }
        getMonth()
    },[])

    const sendquery =async ()=>{
        try {
            const resdb = await axios.post('/queryentrydata',{value})
            settdata(resdb.data)
        } catch (error) {
            toast.error("some thing is wrong!!")
        }
    }
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <div className={style.text}>
                    <h1><span><RiUserSearchFill/></span>query</h1>
                </div>
                <div className={style.search}>
                    <div className={style.inpg}>
                        <input value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" placeholder='search' />
                        <button onClick={sendquery}><span><ImSearch/></span></button>
                    </div>
                </div>
                <div className={style.act}>
                    <button onClick={()=>{navigat('/entry')}}><span><AiOutlineFileAdd/></span>entry new</button>
                </div>
            </div>
            <div className={style.table}>
                <Table data={tdata}/>
            </div>
        </div>
    </div>
  )
}

export default Query