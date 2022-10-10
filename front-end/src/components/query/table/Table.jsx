import React from 'react';
import List from './list/List';
import style from "./table.module.scss";


const Table = ({data}) => {
  return (
    <div className={style.main}>
        <table>
            <thead>
                <tr>
                    <th>নাম</th>
                    <th>মোবাইল</th>
                    <th>প্রতিষ্ঠানের নাম </th>
                    <th>কি সিধান্ত নিলেন</th>
                    <th style={{textAlign:'center'}}>ভর্তি হয়েছেন</th>
                    <th>তারিখ</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
           { data.map((n)=>{
         return (
           <List key={n._id} data={n}/>
         )

        })}
            </tbody>
        </table>
    </div>
  )
}

export default Table