import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SecretRoute = ({Element,Ch}) => {
     const [load, setload] = useState(true);
    let navigate = useNavigate();
    useEffect(() => {
      const getauth = async()=>{
        try {
            const res = await fetch("/chackAuth");
            // let data = await res.json();
            let status = await res.status;
            if(status !== 200){
                toast.error("Login frist to acsses")
                return navigate("/login");
            }else{
                return setload(false)
            }
        } catch (error) {
            toast.error("wrong 2")
            return navigate("/login");
            
        }
        
      }
      getauth()
      
    }, [navigate])
  return (
    <>
        {load? <h1> </h1> :(<Element El={Ch} />)}
    </>
  )
}

export default SecretRoute