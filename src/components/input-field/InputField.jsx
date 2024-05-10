import React from 'react'
import style from "./inputField.module.scss"

export default function InputField({placeholder}) {
  return (
   <input type='text' className={style["input-field"]} placeholder={placeholder} />
  )
}
