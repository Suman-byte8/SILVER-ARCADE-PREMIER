import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

export default function DonutRing({value=70}){
  const data = {
    labels:["done","left"],
    datasets:[{
      data:[value,100-value],
      backgroundColor:["#bfe9ff","#e9eef2"], /* pale ring like the mock */
      borderWidth:0
    }]
  };
  const options = {
    cutout:"78%",
    plugins:{legend:{display:false}, tooltip:{enabled:false}},
    animation:false
  };
  return <div style={{ width: 86, height: 86 }}><Doughnut data={data} options={options} /></div>;
}
