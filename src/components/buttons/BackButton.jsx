import React from 'react'
import style from "./backButton.module.scss"
import {R} from "../../constants/resources"
import { Link } from 'react-router-dom'

export default function BackButton({onClick}) {
   return (
      <Link className={style["container"]} to={onClick}>
         <img src={R.ic_back_arrow} className={style["icon"]} alt={"back-button"} />
      </Link>
   )
}
