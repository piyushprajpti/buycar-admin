import React from 'react'
import style from "./sellerLead.module.scss"
import PrimaryHeading from '../../components/primary-heading/PrimaryHeading'
import SearchBar from '../../components/search-bar/SearchBar'
import SelectableButton from '../../components/buttons/SelectableButton'
import { R } from '../../constants/resources'
import PrimaryButton from '../../components/buttons/PrimaryButton'

export default function SellerLead() {
   return (
      <div className={style["container"]}>

         <PrimaryHeading title={"Seller Lead Management"} count={"1330"} fontSize={"1.75rem"} fontWeight={600} />

         <div className={style["filters-container"]}>
            <div className={style["filters-wrapper"]}>
               <SearchBar placeholder={"Search Buyer Name or No."} />
               <SelectableButton
                  options={["All Status", 2024, 2023, 2022, 2021, 2020]}
                  trailingIcon={R.ic_arrow_down}
                  containerStyle={style["selectable-button-container-style"]}
               />
            </div>

            <div className={style["action-buttons-wrapper"]}>
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
