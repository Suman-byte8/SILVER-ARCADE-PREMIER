import React, { useEffect, useMemo, useRef, useState } from "react";
import Sparkline from "../Home/SparkLine";
import { gsap } from "gsap";

export default function FavoriteItemCard({
  title = "Watermelon Juice With Ice",
  img = "https://images.unsplash.com/photo-1579503725144-43232cc793bb?w=400&auto=format&fit=crop&q=60",
  points = [3, 6, 4, 7, 5, 8, 6, 9, 5], // curve data (can replace later)
  totalSales = 6732,
  votes = 454,
  likes = "256k",
  interest = 45,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    );
  }, []);

  // derived stats from the curve (keeps panel “real” when data changes)
  const kpi = useMemo(() => {
    const sum = points.reduce((a, b) => a + b, 0);
    const avg = sum / points.length;
    const first = points[0] ?? 0;
    const last = points[points.length - 1] ?? 0;
    const growth = first > 0 ? ((last - first) / first) * 100 : 0;
    return {
      last,
      sum,
      avg: Math.round(avg * 10) / 10,
      growth: Math.round(growth * 10) / 10,
    };
  }, [points]);

  return (
    <div
      ref={ref}
      // important: relative + overflow-visible so hover panel can float without shifting layout
      className="group relative overflow-visible bg-white dark:bg-card p-4 rounded-lg shadow-md flex items-center gap-4 w-full"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0} // keyboard focus support
    >
      {/* Image (fixed, never distorts) */}
      <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-gray-200 dark:bg-gray-700">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-[160px]">
        <div className="font-medium text-gray-800 text-sm dark:text-text-primary leading-tight">
          {title}
        </div>
        <div className="text-[11px] text-gray-600 dark:text-muted flex items-center mt-0.5">
          <span className="text-yellow-500">
            <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
            <i className="fa-solid fa-star" /> <i className="fa-solid fa-star" />{" "}
            <i className="fa-regular fa-star" />
          </span>
          <span className="ml-2">({votes} votes)</span>
        </div>
        <div className="flex items-center space-x-1 text-[11px] text-blue-500 mt-0.5">
          <i className="fa-solid fa-heart" />
          <span>{likes} Like It</span>
        </div>
      </div>

      {/* Tiny spark area placeholder (keeps balance; hidden visually until hover) */}
      <div className="w-24 h-14 opacity-0 pointer-events-none">
        <Sparkline points={points} />
      </div>

      {/* Right stats block (matches your screenshot numbers) */}
      <div className="flex space-x-6 flex-shrink-0">
        <div className="flex flex-col items-start">
          <div className="text-xl font-bold text-blue-500">{interest}%</div>
          <div className="text-[11px] text-gray-500">Interest</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-[11px] text-gray-500 mb-1 whitespace-nowrap">
            <i className="fa-solid fa-chart-column" /> Total Sales
          </div>
          <div className="text-xl font-bold text-blue-500">
            {totalSales.toLocaleString()}
          </div>
        </div>
      </div>

      {/* HOVER PANEL (graph + pro details) */}
      <div
        className={[
          "absolute right-2 top-1/2 -translate-y-1/2",
          "w-[320px] md:w-[360px] pointer-events-none", // don’t steal mouse from the card
          "opacity-0 translate-x-2 scale-95",
          "group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100",
          show ? "opacity-100 translate-x-0 scale-100" : "",
          "transition-all duration-200 ease-out z-100",
        ].join(" ")}
      >
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 p-4 ">
          <div className="h-24">
            <Sparkline points={points} className="w-full h-full" />
          </div>

          {/* Extra details you asked for */}
          <div className="mt-3 grid grid-cols-4 gap-3 text-[11px] text-gray-600 dark:text-slate-300">
            <div>
              <div className="text-slate-500">Latest</div>
              <div className="font-semibold text-slate-800 dark:text-white">
                {kpi.last}
              </div>
            </div>
            <div>
              <div className="text-slate-500">Avg</div>
              <div className="font-semibold text-slate-800 dark:text-white">
                {kpi.avg}
              </div>
            </div>
            <div>
              <div className="text-slate-500">Total (pts)</div>
              <div className="font-semibold text-slate-800 dark:text-white">
                {kpi.sum}
              </div>
            </div>
            <div>
              <div className="text-slate-500">Growth</div>
              <div
                className={[
                  "font-semibold",
                  kpi.growth >= 0 ? "text-emerald-600" : "text-rose-600",
                ].join(" ")}
              >
                {kpi.growth >= 0 ? "+" : ""}
                {kpi.growth}%
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-clock" />
              <span>Last 7–10 intervals</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-bolt" />
              <span>Live data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
