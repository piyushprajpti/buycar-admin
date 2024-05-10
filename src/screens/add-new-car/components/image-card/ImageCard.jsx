import React, { useRef, useState } from 'react'
import style from "./imageCard.module.scss"
import { R } from '../../../../constants/resources'

export default function ImageCard({ text }) {
   const [imagePreview, setImagePreview] = useState(null);
   const fileInputRef = useRef(null)

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setImagePreview(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   const handleDeleteClick = (e) => {
      console.log(e.target.alt)
      e.stopPropagation();
      setImagePreview(null);
   };

   const handleClick = () => {
      fileInputRef.current.click();
   };

   return (
      <div htmlFor={`file-input-${text}`} className={style["container"]} onClick={handleClick}>
         <input ref={fileInputRef} id={`file-input-${text}`} type='file' accept='image/*' className={style["input-tag"]} onChange={handleImageChange} />
         {imagePreview ?
            <div className={style["preview-wrapper"]}>
               <img src={imagePreview} className={style["preview-image"]} alt={"preview"} />
               <img src={R.ic_delete} className={style["delete-icon"]} alt={"delete"} onClick={handleDeleteClick} />
            </div>
            :
            <div className={style["wrapper"]}>

               <img src={R.ic_add} className={style["add-icon"]} alt={"add-icon"} />
               <p className={style["text"]}>{text}</p>

            </div>
         }
      </div>
   );
}
