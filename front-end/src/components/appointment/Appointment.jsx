import React from 'react';
import { toast } from "react-toastify";
import style from './appointment.module.scss';
import Form from "./form/Add";
import Table from "./table/Table";

const Appointment = () => {
    const [tdata,settdata] = React.useState([]);
    const [form,setform] = React.useState(false);
    const [ids,setids] = React.useState();
    React.useEffect(()=>{
        const getMonth = async ()=>{
            try {
                let res =await fetch("/getappointment");
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
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <h1><span>#</span> Today Appointment</h1>
            </div>
            <div className={style.table}>
                <Table data={tdata} setids={setids} setform={setform}/>
            </div>
        </div>
        <div className={style.over}>
           {form? <Form id={ids} setform={setform} settdata={settdata}/>:""}
        </div>
    </div>

  )
}

export default Appointment