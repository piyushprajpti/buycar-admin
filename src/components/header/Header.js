import React from 'react'
import style from "./header.module.scss"
import { R } from "../../constants/resources"

export default function Header() {
   return (
      <div className={style["container"]}>

         <div className={style["logo-wrapper"]}>
            <img src={R.img_brand_logo} className={style["logo"]} alt={"logo"} />
         </div>

         <div className={style["right-section-container"]}>

            <div className={style["notification-wrapper"]}>
               <img src={R.ic_bell} className={style["bell-icon"]} alt={"bell-icon"} />
               <p className={style["notification-count"]}>6</p>
            </div>

            <div className={style["profile-wrapper"]}>
               <img src={R.img_profile_pic} className={style["profile-img"]} alt={"profile"} />

               <div className={style["name-wrapper"]}>
                  <p className={style["name"]}>Moni Roy</p>
                  <p className={style["role"]}>Admin</p>
               </div>
            </div>

         </div>
      </div>
   )
}
