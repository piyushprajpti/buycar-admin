import React from 'react'
import style from "./primaryButton.module.scss"
import { Link } from 'react-router-dom'

export default function PrimaryButton(
   {containerStyle, leadingIcon, name, fontSize, linkTo, onClick}
) {
   return (
      <Link className={[style["container"], containerStyle].join(" ")} to={linkTo} onClick={() => onClick()}>

         {leadingIcon && <img src={leadingIcon} alt={"icon"} className={style["leading-icon"]} />}

         <p className={style["button-name"]} style={{fontSize: fontSize}}>{name}</p>

      </Link>
   )
}
