import React from 'react'
import style from "./primaryButton.module.scss"

export default function PrimaryButton(
   {containerStyle, leadingIcon, name, fontSize}
) {
   return (
      <div className={[style["container"], containerStyle].join(" ")}>

         {leadingIcon && <img src={leadingIcon} alt={"icon"} className={style["leading-icon"]} />}

         <p className={style["button-name"]} style={{fontSize: fontSize}}>{name}</p>

      </div>
   )
}
