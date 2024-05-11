import React from 'react'
import style from "./carDetails.module.scss"
import PrimaryHeading from '../../../components/primary-heading/PrimaryHeading'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import BackButton from "../../../components/buttons/BackButton"
import { R } from '../../../constants/resources'
import VehiclePriceBox from '../../../components/vehicle-price-box/VehiclePriceBox'
import VehicleSpecsBox from '../../../components/vehicle-specs-box/VehicleSpecsBox'

export default function CarDetails({ onClick }) {

   const images = [
      {
         src: R.img_car1,
         type: "Front"
      },
      {
         src: R.img_car2,
         type: "Front Diagonal"
      },
      {
         src: R.img_car1,
         type: "Back"
      },
      {
         src: R.img_car2,
         type: "Back Diagonal"
      },
   ]

   return (
      <div className={style["container"]}>
         <div className={style["wrapper"]}>

            <div className={style["header-container"]}>
               <div className={style["heading-wrapper"]}>
                  <BackButton onClick={() => onClick()} />
                  <PrimaryHeading
                     title={"Car Details"}
                     fontSize={"1.75rem"}
                     fontWeight={600}
                  />
               </div>
               <PrimaryButton
                  containerStyle={style["primary-button-container-style"]}
                  leadingIcon={R.ic_edit_pen_white}
                  name={"Edit"}
                  fontSize={"1.125rem"}
                  linkTo={"/edit-car-details"}
               />
            </div>

            <div className={style["primary-image-wrapper"]}>
               <img src={images[0].src} alt='car' className={style["primary-image"]} />
            </div>

            <div className={style["images-carousel-container"]}>
               <img src={R.img_back_button} className={style["back-button"]} />
               {
                  images.map((image) => (
                     <div className={style["image-carousel-wrapper"]}>
                        <img src={image.src} alt='image' className={style["carousel-image"]} />
                        <p className={style["image-type"]}>{image.type}</p>
                     </div>
                  ))
               }
               <img src={R.img_forward_button} className={style["forward-button"]} />
            </div>

            <p className={style["vehicle-name"]}>2018 Honda Amaze 1.2L I-VTEC S</p>

            <VehicleSpecsBox
               transmissionType={"Automatic"}
               fuelType={"Petrol"}
               odometer={"40,000"}
               isDetailpage={true}
            />

            <VehiclePriceBox
               vehicleOriginalPrice={"$5,00,000"}
               vehicleDiscountedPrice={"$4,50,000"}
               discountAmount={"10%"}
            />

         </div>
      </div>
   )
}
