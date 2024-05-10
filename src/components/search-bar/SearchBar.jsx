import React from 'react'
import style from "./searchBar.module.scss"
import {R} from "../../constants/resources"

export default function SearchBar({placeholder}) {
  return (
    <div className={style["container"]}>
      <img src={R.ic_search} className={style["search-icon"]} alt={"search-icon"} />
      <input  type='search' className={style["search-bar"]} placeholder={placeholder} />
    </div>
  )
}
