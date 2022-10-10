import React from 'react';
import { Link } from "react-router-dom";
import style from "./list.module.scss";


const List = ({data}) => {
  const d = new Date(data.updatedAt)
  return (
    <tr className={style.tr}>
    <td>{data.name} </td>
    <td>{data.mobile}</td>
    <td>{data.company}</td>
    <td>{data.decision}</td>
    <td className={style.c}>{data.admited? "হা":'না'}</td>
    <td>{`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`}</td>
    <td> 
    <Link to={`/entrydetailse/${data._id}`}> <button>details</button> </Link>
    </td>
    
</tr>
  )
}

export default List