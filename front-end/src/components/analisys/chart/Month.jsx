import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";


 

const Month = ({data2}) => {
  const [sedata,setsedata] = useState([])

  useEffect(()=>{
    const al = [0,0,0,0,0,0,0,0,0,0,0,0]
    data2.forEach(element => {
      al[element.month] += 1;
    });
    setsedata(al)
  },[data2])
 

  let series =[{
    name: 'visitor',
    data: sedata
  }];
  
  
  
  let options = {
    
    colors:['#FF0000'],
    chart: {
      height: 350,
      type: 'area',
      zoom: {
                  enabled: false
              }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      axisBorder:{
        offsetX:0
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }
  
  
  
  

  return (
    <div> <Chart options={options} series={series} type="area" height={350}/></div>
  )
}

export default Month
