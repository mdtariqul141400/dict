import axios from "axios";
import React from 'react';
import { IoMdLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../../assets/img/Logo png.png';
import style from "./login.module.scss";
// get cookies lib 





const Login = () => {


    // React.useEffect(()=>{
    //     console.log(getCookie("me"));
    //     let cookie_array = document.cookie.split(';')
    //     if(cookie_array[0] !== "" && cookie_array[1] !== ""){
    //         const getdata = async ()=>{
    //             let res = await fetch("/loginback");
    //             let data = await res.json()
    //             console.log(data)
    //         }
    //         getdata();
    //     //   setLogin(true);
    //     }
    //   },[]);



    let navigate = useNavigate();
    let [username,setUsername] = React.useState('');
    let [password,setPassword] = React.useState('');
    const fromsubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('/login',{username,password});
            if(res.status === 200){
                console.log(res);
                document.cookie = `me=${res.data.me}`;
                document.cookie = `go=${res.data.go}`;
                return navigate("/");
            }else{
                toast.error("some thing is wrong!")
            }
        } catch (error) {
            console.log(error.response.status)
            if(error.response.status === 401){
               return toast.error("Wrong information!")
            }
            toast("something is wrong")
        }
    }
  return (
    <div className={style.main}>
        <div className={style.con}>
            <div className={style.head}>
                <img src={logo} alt="" />
                <h1><span><IoMdLogIn/></span> Login</h1>
            </div>
            <div className={style.form}>
                <form action="#" onSubmit={fromsubmit} method="post">
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username'/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                    <button type="submit">login</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login