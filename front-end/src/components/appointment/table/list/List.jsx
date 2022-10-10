import React from 'react';
import { Link } from "react-router-dom";
import style from "./list.module.scss";


const List = ({data,setform,setids}) => {
  
  const d = new Date(data.updatedAt)
  const onclicknext = (id)=>{
        setids(id);
        setform(true);
  }
  return (
    <tr className={style.tr}>
    <td>{data.name} </td>
    <td>{data.mobile}</td>
    <td>{data.decision}</td>
    <td>{`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}</td>
    <td> 
        <Link to={`/entrydetailse/${data._id}`}> <button>details</button> </Link>
    </td>
    <td> 
        <button onClick={()=>{onclicknext(data._id)}}>next</button>
    </td>
    
</tr>
  )
}

export default List