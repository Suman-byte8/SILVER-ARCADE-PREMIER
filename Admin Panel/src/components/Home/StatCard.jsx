import React, { useEffect, useRef } from "react";
import DonutRing from "./DonutRing";
import { gsap } from "gsap";

export default function StatCard({title,value,ring=72}){
  const ref = useRef(null);
  useEffect(()=>{
    // gsap.from(ref.current,{y:18,opacity:0,duration:.5,delay:.05,ease:"power2"});
  },[]);
  return (
    <div ref={ref} className="bg-white dark:bg-card p-6 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <div className="text-lg font-medium text-gray-600 dark:text-muted">{title}</div>
        <div className="text-3xl font-bold text-gray-900 dark:text-text-primary">{value}</div>
      </div>
      <DonutRing value={ring}/>
    </div>
  );
}
