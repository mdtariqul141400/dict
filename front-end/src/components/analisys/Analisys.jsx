import axios from "axios";
import React from "react";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiBarChartAlt, BiDoughnutChart, BiLineChart } from "react-icons/bi";
import { FaUserClock, FaUserFriends } from "react-icons/fa";
import { toast } from "react-toastify";
import style from "./analisys.module.scss";
import Month from "./chart/Month";
import Pic from "./chart/Pic";
const d = new Date()

const Analisys = () => {
  const [year,setYear] = React.useState(d.getFullYear())
  const [load,setLoad] = React.useState(false)
  const [data,setData] = React.useState([])
  const [total,settotal] = React.useState("0")
  const [totaltoday,settotaltoday] = React.useState("0")


  React.useEffect(()=>{
    const getda = async ()=>{
      try {
        
        let resdb = await axios.post("/getyeardataan",{year:d.getFullYear()});
        if(resdb.status === 200){
          setData(resdb.data.data)
          settotal(resdb.data.c.total)
          settotaltoday(resdb.data.c.totaltoday)
          setLoad(false)
        }
      } catch (error) {
        toast.error("some thing is wrong!!");
        setLoad(false);
      }
    }
    getda()
  },[])
  React.useEffect(()=>{
      
  const getData = async ()=>{
    if(load){
      return
    }

    setLoad(true)
    try {
      let resdb = await axios.post("/getyeardataan",{year});
      if(resdb.status === 200){
        setData(resdb.data.data)
        setLoad(false)
      }
    } catch (error) {
      toast.error("some thing is wrong!!");
      setLoad(false);
    }
  }
  getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[year])


  return (
    <div className={style.main}>
        <div className={style.con}>
          <div className={style.row3}>
              <div className={style.con}>
                <div className={style.box}>
                  <div className={style.h}>
                    <h1><span><BiDoughnutChart/></span> admition rate</h1>
                  </div>
                  <div className={style.ch}>
                    <Pic/>
                  </div>
                </div>
                <div className={style.box}>
                <div className={style.h}>
                    <h1><span><BiLineChart/></span> total Visitor</h1>
                  </div>
                  <div className={style.ch}>
                    <div className={style.cpi}>
                      <div className={style.ico}>
                          <FaUserFriends/>
                      </div>
                      <div className={style.text}>
                        <h1>{total}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.box}>
                <div className={style.h}>
                    <h1><span><BiBarChartAlt/></span> total Visitor today</h1>
                  </div>
                  <div className={style.ch}>
                    <div className={style.cpi}>
                      <div className={style.ico}>
                          <FaUserClock/>
                      </div>
                      <div className={style.text}>
                        <h1>{totaltoday}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          
          <div className={style.totalm}>
            <div className={style.h}>
              <h1><span><AiOutlinePieChart/></span>Total visitor year {year}</h1>
              <div className={style.selectm}>
            <span>chouse date to show data</span>
            <select value= {year}  onChange={(e)=>{  setYear(e.target.value); }}>
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((e,i)=>{
                return (<option key={i} value={d.getFullYear()-i}>{d.getFullYear()-i}</option>)
              })}
              
            </select>
            
          </div>
            </div>
            <div className={style.chart}>
              <Month data2={data}/>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Analisys 