import React, { useEffect, useState } from 'react';
import { CgPassword } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Coarse from "./coarse/Coarse.jsx";
import AddCor from './coarse/form/AddCor.jsx';
import style from './config.module.scss';
import AddHtk from './wtk/form/AddHtk.jsx';
import Wtk from "./wtk/wtk.jsx";

const Config = () => {
    const Navigate = useNavigate();
    const [form,setForm] = useState(false);
    const [form2,setForm2] = useState(false);
    const [allCourse , setAllCourse] = useState([])
    const [allHtk , setAllHtk] = useState([])
    const  [oldPass,setOldPass] = useState("")
    const  [Pass,setPass] = useState("")
    const  [cPass,setcPass] = useState("")
    useEffect(()=>{
        const getData = async()=>{
            try {
                const res = await fetch("/getallcourse");
                const allcoursedata = await res.json();
                return setAllCourse(allcoursedata);
            } catch (error) {
                console.log(error)
                return toast.error("some thing wrong in sever 😥")
            }
        }
        const getData2 = async()=>{
            try {
                const res = await fetch("/getallhtk");
                const allhtkdata = await res.json();
                return setAllHtk(allhtkdata);
            } catch (error) {
                console.log(error)
                return toast.error("some thing wrong in sever 😥")
            }
        }
        getData()
        getData2()
    },[])

    const changePass = async()=>{
        if(Pass !== cPass){
            setOldPass("")
            return toast.error("enter password properly")
        }
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },body:JSON.stringify({Pass:Pass,oldPass:oldPass})
        };
        try {
            const res = await fetch("/changepassword",settings);
            const status = res.status;
            if(status === 200){
                toast.success("password changed plz login again 😀");
                document.cookie = 'me=""';
                document.cookie = 'go=""';
                return Navigate("/login")
            }else{
                return toast.error("some thing is wrong 😠")
            }
            
        } catch (error) {
            
        }
    }
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.cpsection}>
                <div className={style.cpcom}>
                    <div className={style.head}>
                        <h1><span><CgPassword/></span> change admin password</h1>
                    </div>
                    <form onSubmit={(e)=>{e.preventDefault();changePass()}}  method="post">
                        <div className={style.inputs}>
                            <input value={oldPass} onChange={(e)=>{setOldPass(e.target.value)}} type="password" name="old"  placeholder='enter current password' required />
                            <input value={Pass} onChange={(e)=>{setPass(e.target.value)}} type="password" name="new" placeholder='enter new password' required />
                            <input  value={cPass} onChange={(e)=>{setcPass(e.target.value)}} type="text" name="cnew"  placeholder='conferm current password' required />
                        </div>
                        <div className={style.button}>
                            <button type="submit">change</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* change password section end  */}
            <div className={style.coarseSection}>
                <Coarse setForm={setForm} data={allCourse} setData={setAllCourse}/>
            </div>
            <div className={style.coarseSection}>
                <Wtk setForm={setForm2} data={allHtk} setData={setAllHtk}/>
            </div>
        </div>
        <div className={style.over}>
            {form?<AddCor data={allCourse} setData={setAllCourse} setForm={setForm}/>:<></>}
            
        </div>
        <div className={style.over}>
            {form2?<AddHtk data={allHtk} setData={setAllHtk} setForm={setForm2}/>:<></>}
            
        </div>
    </div>
  )
}

export default Config