import axios from "axios";
import React, { createContext, useContext, useState } from 'react';

export const contextAuth = createContext();

// custom houk
export function useAuth(){
    return useContext(contextAuth);
}

const AutContext = ({children}) => {

    let [login,setLogin] = useState(false);

  React.useEffect(()=>{
    let cookie_array = document.cookie.split(';')
    if(cookie_array[0] !== "" && cookie_array[1] !== ""){
        const getdata = async ()=>{
            let res = await axios.get("http://localhost:3300/login");
            console.log(res)
        }
        getdata();
      setLogin(true);
    }
  },[]);
  const value ={
    login,setLogin
  }

  return (
    <contextAuth.Provider value={value}>
        {children}
    </contextAuth.Provider>
  )
}

export default AutContext;