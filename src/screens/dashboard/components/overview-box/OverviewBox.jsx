import React from 'react'
import style from "./overviewbox.module.scss"
import { R } from "../../../../constants/resources"

export default function OverviewBox(
   { title, value, icon, isPositive, changePercent, timeDuration }
) {

   const chartIcon = isPositive ? R.ic_increase : R.ic_decrease;
   const changeValueColor = isPositive ? "var(--increase-green)" : "var(--decrease-red)"
   const changeType = isPositive ? "Up" : "Down"

   return (
      <div className={style["container"]}>

         <div className={style["upper-section"]}>

            <div className={style["text-section"]}>
               <p className={style["title"]}>{title}</p>
               <p className={style["value"]}>{value}</p>
            </div>

            <img src={icon} className={style["img"]} alt={"icon"} />

         </div>

         <div className={style["change-wrapper"]}>
            <img src={chartIcon} className={style["chart-icon"]} alt={"icon"} />
            <p>
               <span style={{ color: changeValueColor, margin: "0 4px" }}>{changePercent}</span>
               <span>{changeType}</span>
               <span> from </span>
               <span>{timeDuration}</span>
            </p>
         </div>

      </div>
   )
}
