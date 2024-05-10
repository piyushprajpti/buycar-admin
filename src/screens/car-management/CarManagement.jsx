import React from 'react'
import style from "./carManagement.module.scss"
import PrimaryHeading from "../../components/primary-heading/PrimaryHeading"
import SearchBar from '../../components/search-bar/SearchBar'
import SelectableButton from "../../components/buttons/SelectableButton"
import { R } from '../../constants/resources'
import PrimaryButton from "../../components/buttons/PrimaryButton"

export default function CarManagement() {
   return (
      <div className={style["container"]}>

            <PrimaryHeading title={"Car Management"} count={"250"} fontSize={"1.75rem"} fontWeight={600} />

         <div className={style["filters-container"]}>
            <div className={style["filters-wrapper"]}>
               <SearchBar placeholder={"Search Vehicle No."} />
               <SelectableButton
                  options={["All Make", 2024, 2023, 2022, 2021, 2020]}
                  trailingIcon={R.ic_arrow_down}
                  containerStyle={style["selectable-button-container-style"]}
               />
               <SelectableButton
                  options={["All Model", 2024, 2023, 2022, 2021, 2020]}
                  trailingIcon={R.ic_arrow_down}
                  containerStyle={style["selectable-button-container-style"]}
               />
               <SelectableButton
                  options={["All Variant", 2024, 2023, 2022, 2021, 2020]}
                  trailingIcon={R.ic_arrow_down}
                  containerStyle={style["selectable-button-container-style"]}
               />
               <SelectableButton
                  options={["All Status", 2024, 2023, 2022, 2021, 2020]}
                  trailingIcon={R.ic_arrow_down}
                  containerStyle={style["selectable-button-container-style"]}
               />
               <SelectableButton
                  options={["All Tags", 2024, 2023, 2022, 2021, 2020]}
                  trailingIcon={R.ic_arrow_down}
                  containerStyle={style["selectable-button-container-style"]}
               />
            </div>

            <div className={style["action-buttons-wrapper"]}>

               <PrimaryButton
                  containerStyle={style["add-new-car-button-container-style"]}
                  leadingIcon={R.ic_add_white}
                  name={"Add New Car"}
                  fontSize={"1rem"}
               />

               <PrimaryButton
                  containerStyle={style["excel-button-container-style"]}
                  leadingIcon={R.ic_excel}
                  name={"Export Excel"}
                  fontSize={"1rem"}
               />

            </div>
         </div>
      </div>
   )
}
