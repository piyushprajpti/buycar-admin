import React, { useState } from 'react'
import style from "./priceRange.module.scss"
import { Slider } from '@mui/material'

export default function PriceRange() {

   const [minPrice, setMinPrice] = useState(50000)
   const [maxPrice, setMaxPrice] = useState(8000000)
   const [value, setValue] = useState([minPrice, maxPrice])

   const onChange = (event, value) => {
      setValue(value)
      setMinPrice(value[0])
      setMaxPrice(value[1])
      console.log(event)
   }

   return (
      <>

         <div className={style["price-range-amount"]}>
            <p className={style["price"]}>{"₹" + minPrice}</p>
            <p className={style["price"]}>{"₹" + maxPrice}</p>
         </div>

         <Slider 
            value={value}
            onChange={onChange}
            min={50000}
            max={10000000}
            step={1}
            sx={{
               width: "100%",
               color: "var(--primary-blue)",
               margin: " 0 0 12px 0"
            }}
         />

         <div className={style["min-max-label-wrapper"]}>
            <p className={style["min-max-label"]}>Minimum</p>
            <p className={style["min-max-label"]}>Maximum</p>
         </div>

      </>
   )
}
