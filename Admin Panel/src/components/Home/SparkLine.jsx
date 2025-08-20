import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip
} from "chart.js";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

export default function Sparkline({points=[5,7,6,9,5,8,6]}){
  const data = {
    labels: points.map((_,i)=>i),
    datasets:[{
      data: points,
      borderColor:"#2f99c8",
      borderWidth:2,
      pointRadius:0,
      tension:.4
    }]
  };
  const options = {
    plugins:{legend:{display:false}, tooltip:{enabled:false}},
    scales:{x:{display:false}, y:{display:false}},
    elements:{line:{borderJoinStyle:"round"}}
  };
  return <div className="flex-none w-[220px]"><Line data={data} options={options}/></div>;
}
