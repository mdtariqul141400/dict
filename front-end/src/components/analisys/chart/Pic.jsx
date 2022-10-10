import axios from "axios";
import React from 'react';
import Chart from "react-apexcharts";
import { toast } from "react-toastify";


 

const Month = () => {
    const [series,setSeries] = React.useState([50,50])

    React.useEffect(()=>{
        const get = async ()=>{
            
            try {
                const res = await axios.get('/getadmitedcount');
                if(res.status === 200){
                    const {add,noadd} = res.data;
                    setSeries([add,noadd])
                }
            } catch (error) {
                console.log(error)
                toast.error("something is wrong !!")
            }
        }
        get()
    },[])

    var options = {
        labels: ["admited","none Admited"],
        colors:['#000000', '#FF0000'],
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show:false
            }
          }
        }]
      }

  return (
    <div> <Chart options={options} series={series}  type="donut" width={320}/></div>
  )
}

export default Month
