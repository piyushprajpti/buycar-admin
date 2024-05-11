import React, { useState } from 'react'
import style from "./carManagement.module.scss"
import PrimaryHeading from "../../components/primary-heading/PrimaryHeading"
import SearchBar from '../../components/search-bar/SearchBar'
import SelectableButton from "../../components/buttons/SelectableButton"
import { R } from '../../constants/resources'
import PrimaryButton from "../../components/buttons/PrimaryButton"
import CarDetails from './car-details/CarDetails'
import DetailTable from '../../components/tables/DetailTable'

export default function CarManagement() {

   const [isDetailPageVisible, setIsDetailPageVisible] = useState(true)

   return (
      <div className={style["container"]}>

         {isDetailPageVisible && <CarDetails onClick={() => setIsDetailPageVisible(false)} />}

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
                  linkTo={"/add-new-car"}
               />

               <PrimaryButton
                  containerStyle={style["excel-button-container-style"]}
                  leadingIcon={R.ic_excel}
                  name={"Export Excel"}
                  fontSize={"1rem"}
               />

            </div>
         </div>

         <DetailTable />
      </div>
   )
}
