import React from 'react';
import { toast } from "react-toastify";
import style from "./opt.module.scss";

const Opt = ({v,set}) => {
  const [courses,setcourses] = React.useState([]);

  React.useEffect(()=>{
    const getcourse = async ()=>{
      try {
        let res =await fetch('/getActiveCourse');
        let status =await (await res).status;
        let data =await res.json()
        if(status === 200){
          setcourses(data);
        }else{
          toast.error("spme thing is wrong")
        }
      } catch (error) {
        console.log(error);
        toast.error("some thing is wrong");
      }
    }
    
    getcourse()
  },[])
  return (
    <div className={style.main}>
        <label> কি course সম্পর্কে জানতে চান ?</label><br />
        <select value={v} onChange={(e)=>{set(e.target.value)}}>
            <option value="">choase a course</option>
            {courses.map((e)=>{
              return (<option value={e.name}>{e.name}</option>)
            })}
        </select>
    </div>
  )
}

 export const Opt2 = ({v,set}) => {
  return (
    <div className={style.main}>
        <label>পরবর্তীতে কবে আসবেন ? </label><br />
        <input value={v} onChange={(e)=>{set(e.target.value)}} type="date"  />
    </div>
  )
}

export const Opt3 = ({v,set}) => {
  
  const [ Htk , sethtk ] = React.useState([]);
  React.useEffect(()=>{
    const getcourse2 = async ()=>{
      try {
        let res =await fetch('/getActivehtk');
        let status =await (await res).status;
        let data =await res.json()
        if(status === 200){
          sethtk(data);
        }else{
          toast.error("spme thing is wrong")
        }
      } catch (error) {
        console.log(error);
        toast.error("some thing is wrong");
      }
    }
    getcourse2()
  },[])
  return (
    <div className={style.main}>
        <label>আমাদের সম্পর্কে কি ভাবে জানলেন ? </label><br />
        <select value={v} onChange={(e)=>{set(e.target.value)}}>
            <option value="">chouse</option>
            { Htk.map((e)=>{
              return (<option value={e.name}>{e.name}</option>)
            })}
        </select>
    </div>
  )
}

export default Opt