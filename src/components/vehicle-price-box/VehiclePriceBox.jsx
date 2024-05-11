import React from 'react'
import style from "./vehiclePriceBox.module.scss"

export default function VehiclePriceBox({ vehicleOriginalPrice, vehicleDiscountedPrice, discountAmount }) {

   let textDecoration = vehicleDiscountedPrice ? "line-through" : "none";
   let priceColor = vehicleDiscountedPrice ? "var(--original-price)" : "var(--primary-blue)";

   return (
      <div className={style["vehicle-price-container"]}>

         <p className={style["vehicle-original-price"]} style={{ textDecoration: textDecoration, color: priceColor }}>{vehicleOriginalPrice}</p>
         <p className={style["vehicle-discounted-price"]}>{vehicleDiscountedPrice}</p>
         {discountAmount && <p className={style["green-discount-tag"]}>{discountAmount + " OFF"}</p>}

      </div>
   )
}

