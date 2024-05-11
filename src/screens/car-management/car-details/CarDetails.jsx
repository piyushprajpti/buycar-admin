import React from 'react'
import style from "./carDetails.module.scss"
import PrimaryHeading from '../../../components/primary-heading/PrimaryHeading'
import PrimaryButton from '../../../components/buttons/PrimaryButton'
import BackButton from "../../../components/buttons/BackButton"
import { R } from '../../../constants/resources'
import VehiclePriceBox from '../../../components/vehicle-price-box/VehiclePriceBox'
import VehicleSpecsBox from '../../../components/vehicle-specs-box/VehicleSpecsBox'

export default function CarDetails({onClick}) {
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
