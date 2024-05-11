import React from 'react'
import style from "./vehicleSpecsBox.module.scss"
import { R } from '../../constants/resources'

export default function VehicleSpecsBox({ transmissionType, fuelType, odometer }) {

   return (

      <div className={style["specs-container"]}>

            <div className={style["spec-wrapper"]}>
               <img src={R.ic_transmission} alt='icon' className={style["spec-icon"]} />
               <p className={style["spec-name"]}>{transmissionType}</p>
            </div>

            <p className={style["gray-dot"]}></p>

            <div className={style["spec-wrapper"]}>
               <img src={R.ic_fuel} alt='icon' className={style["spec-icon"]} />
               <p className={style["spec-name"]}>{fuelType}</p>
            </div>

            <p className={style["gray-dot"]}></p>

            <div className={style["spec-wrapper"]}>
               <img src={R.ic_odometer} alt='icon' className={style["spec-icon"]} />
               <p className={style["spec-name"]}>{odometer}</p>
            </div>

      </div>
   )
}
