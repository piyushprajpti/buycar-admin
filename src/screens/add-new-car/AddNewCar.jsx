import React from 'react'
import style from "./addNewCar.module.scss"
import BackButton from "../../components/buttons/BackButton"
import PrimaryHeading from "../../components/primary-heading/PrimaryHeading"
import InputField from "../../components/input-field/InputField"
import { R } from '../../constants/resources'
import SelectableButton from "../../components/buttons/SelectableButton"
import PrimaryButton from "../../components/buttons/PrimaryButton"
import ImageCard from './components/image-card/ImageCard'

export default function AddNewCar() {
   return (
      <div className={style["container"]}>

         <div className={style["header-wrapper"]}>
            <BackButton linkTo={"/car-management"} />
            <PrimaryHeading title={"Add New Car"} fontSize={"1.75rem"} fontWeight={600} />
         </div>

         <div className={style["wrapper"]}>

            <div className={style["vehicle-details-container"]}>

               <PrimaryHeading title={"Vehicle Details"} fontSize={"1.5rem"} fontWeight={500} />

               <div className={style["two-tabs-section"]}>
                  <InputField placeholder={"Vehicle Number"} />
                  <SelectableButton
                     options={["Select Make", 2024, 2023, 2022, 2021, 2020]}
                     trailingIcon={R.ic_arrow_down_blue}
                     containerStyle={style["selectable-button-container-style"]}
                  />
               </div>

               <div className={style["two-tabs-section"]}>
                  <SelectableButton
                     options={["Select Model", 2024, 2023, 2022, 2021, 2020]}
                     trailingIcon={R.ic_arrow_down_blue}
                     containerStyle={style["selectable-button-container-style"]}
                  />
                  <SelectableButton
                     options={["Select Variant", 2024, 2023, 2022, 2021, 2020]}
                     trailingIcon={R.ic_arrow_down_blue}
                     containerStyle={style["selectable-button-container-style"]}
                  />
               </div>

               <div className={style["two-tabs-section"]}>
                  <SelectableButton
                     options={["Select Fuel Type", 2024, 2023, 2022, 2021, 2020]}
                     trailingIcon={R.ic_arrow_down_blue}
                     containerStyle={style["selectable-button-container-style"]}
                  />
                  <SelectableButton
                     options={["Select Transmission", 2024, 2023, 2022, 2021, 2020]}
                     trailingIcon={R.ic_arrow_down_blue}
                     containerStyle={style["selectable-button-container-style"]}
                  />
               </div>

               <div className={style["two-tabs-section"]}>
                  <InputField placeholder={"Enter KM Driven"} />
                  <InputField placeholder={"Enter Price"} />
               </div>

               <div className={style["two-tabs-section"]}>
                  <InputField placeholder={"Enter Discount %"} />
                  <InputField placeholder={"Enter Selling Price"} />
               </div>

               <div className={style["two-tabs-section"]}>
                  <SelectableButton
                     options={["Select Flag", 2024, 2023, 2022, 2021, 2020]}
                     trailingIcon={R.ic_arrow_down_blue}
                     containerStyle={style["selectable-button-container-style"]}
                  />
                  <SelectableButton
                     options={["Select Status", 2024, 2023, 2022, 2021, 2020]}
                     trailingIcon={R.ic_arrow_down_blue}
                     containerStyle={style["selectable-button-container-style"]}
                  />
               </div>

               <PrimaryButton
                  name={"Submit"}
                  fontSize={"1.5rem"}
                  containerStyle={style["primary-button-container-style"]}
               />

            </div>

            <div className={style["vehicle-images-container"]}>

               <PrimaryHeading title={"Upload Vehicle Images"} fontSize={"1.5rem"} fontWeight={500} />

               <div className={style["images-wrapper"]}>
                  <ImageCard text={"Upload Front View"} />
                  <ImageCard text={"Upload Front Diagonal View - LHS"} />
                  <ImageCard text={"Upload Back Diagonal View - LHS"} />
                  <ImageCard text={"Upload Back View"} />
                  <ImageCard text={"Upload BacFront Diagonal View - RHS"} />
                  <ImageCard text={"Upload Back Diagonal View - RHS"} />
                  <ImageCard text={"Upload Inside View - Dashboard"} />
                  <ImageCard text={"Upload Inside View - Speedometer"} />
                  <ImageCard text={"Upload Inside View - Gear Console"} />
                  <ImageCard text={"Upload Inside View"} />
                  <ImageCard text={"Upload Boot View"} />
                  <ImageCard text={"Upload Spare Wheel"} />
                  <ImageCard text={"Upload Engine Compartment"} />
                  <ImageCard text={"Upload More Images"} />
               </div>


            </div>

         </div>

      </div>
   )
}
