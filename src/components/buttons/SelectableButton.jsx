import React from 'react'
import style from "./selectableButton.module.scss"

export default function SelectableButton({ options, trailingIcon, containerStyle }) {
   return (
      <label htmlFor='select' className={[style["container"], containerStyle].join(" ")}>
         <select id='select' className={style["select-tag"]} name={options[0]} key={options[0]}>
            {
               options.map((option) => (
                  <option key={option} value={option} >{option}</option>
               ))
            }
         </select>
         {
         trailingIcon && <div className={style["down-arrow-box"]}>
            <img src={trailingIcon} className={style["down-arrow-icon"]} alt={"down-arrow"} />
         </div>
         }
      </label>
   )
}
