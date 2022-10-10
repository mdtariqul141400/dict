import axios from "axios";
import React, { useState } from 'react';
import { FaPowerOff } from "react-icons/fa";
import { toast } from "react-toastify";
import style from './add.module.scss';
const AddHtk = ({setform,id,setData,settdata}) => {
    const [value,setValue] = useState('0000-0-0');
    const [coment,setcoment] = useState('');
    
    const submit = (e)=>{
        e.preventDefault()
        
        let send = async ()=>{
            try {
               const ress = await axios.post('/changenextdate',{_id:id,date:value,coment});
               if(ress.status === 200){
                toast.success("date change")
                setform(false)
                settdata(ress.data)
               }else{
                toast.error("something is wrong 😥")
               }
            } catch (error) {
                toast.error("something is wrong 😥")
                console.log(error);
            }
        }
        send()
    }
  return (
    <div className={style.main}>
        <div className={style.border}>
        <div className={style.con}>
            <div className={style.head}>
                <h1>next date</h1>
            </div>
            <div className={style.form}>
                <form onSubmit={submit}  method="post">
                    <div className={style.inputs}>
                        <span>next date</span>
                        <input type="date" value={value} onChange={(e)=>{setValue(e.target.value)}} />
                    </div>
                    <div className={style.inputs}>
                        <span>comments</span>
                        <input type="text" value={coment} onChange={(e)=>{setcoment(e.target.value)}} />
                    </div>
                    <div className={style.btn}>
                        <button type='submit'>change</button>
                    </div>
                </form>
            </div>
            <div className={style.cls}>
                <button onClick={()=>{setform(false)}}><FaPowerOff/></button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddHtk