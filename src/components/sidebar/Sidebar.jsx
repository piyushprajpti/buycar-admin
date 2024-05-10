import React, { useEffect, useState } from 'react'
import style from "./sidebar.module.scss"
import { Link, useLocation } from 'react-router-dom'
import { R } from '../../constants/resources'

export default function Sidebar() {

   const [activeButton, setActiveButton] = useState(1)
   const location = useLocation();

   useEffect(() => {

      const pathname = location.pathname;

      switch (pathname) {
         case "/dashboard":
            setActiveButton(1);
            break;

         case "/car-management":
            setActiveButton(2);
            break;

         case "/buyer-lead-management":
            setActiveButton(3);
            break;

         case "/seller-lead-management":
            setActiveButton(4);
            break;

         case "/add-new-car":
            setActiveButton(2);
            break;

         case "/edit-car-details":
            setActiveButton(2);
            break;

         default:
            setActiveButton(1);
      }

   }, [location])

   const dashboardIcon = (activeButton === 1) ? R.ic_dashboard_white : R.ic_dashboard_blue;
   const carManagementIcon = (activeButton === 2) ? R.ic_car_white : R.ic_car_blue;
   const buyerLeadIcon = (activeButton === 3) ? R.ic_buyer_white : R.ic_buyer_blue;
   const sellerLeadIcon = (activeButton === 4) ? R.ic_seller_white : R.ic_seller_blue;

   return (
      <div className={style["container"]}>

         <Button
            buttonName={"Dashboard"}
            icon={dashboardIcon}
            isActive={activeButton === 1}
            targetPage={"/dashboard"}
            onClick={() => setActiveButton(1)}
         />

         <Button
            buttonName={"Car Management"}
            icon={carManagementIcon}
            isActive={activeButton === 2}
            targetPage={"/car-management"}
            onClick={() => setActiveButton(2)}
         />

         <Button
            buttonName={"Buyer Lead Management"}
            icon={buyerLeadIcon}
            isActive={activeButton === 3}
            targetPage={"buyer-lead-management"}
            onClick={() => setActiveButton(3)}
         />

         <Button
            buttonName={"Seller Lead Management"}
            icon={sellerLeadIcon}
            isActive={activeButton === 4}
            targetPage={"/seller-lead-management"}
            onClick={() => setActiveButton(4)}
         />

         <p className={style["horizontal-divider"]} />

         <div className={style["logout-wrapper"]}>
            <img src={R.ic_logout} className={style["logout-icon"]} />
            <p className={style["logout-text"]}>Logout</p>
         </div>

      </div>
   )
}

const Button = ({ isActive, buttonName, onClick, targetPage, icon }) => {

   const backColor = isActive ? "var(--primary-blue)" : "var(--white)";
   const iconBackColor = isActive ? "transparent" : "var(--icon-back-gray)";
   const textColor = isActive ? "var(--white)" : "var(--sidebar-text-gray)";

   return (
      <Link className={style["button-container"]} onClick={() => onClick()} to={targetPage}>
         <p className={style["vertical-bar"]} style={{ backgroundColor: backColor }} />

         <div className={style["button-wrapper"]} style={{ backgroundColor: backColor }}>

            <div className={style["icon-box"]} style={{ backgroundColor: iconBackColor }}>
               <img src={icon} className={style["icon-img"]} />
            </div>

            <p className={style["button-name"]} style={{ color: textColor }}>{buttonName}</p>

         </div>
      </Link>
   )
}