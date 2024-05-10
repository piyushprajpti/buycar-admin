import React from 'react'
import style from "./buyerEditLeads.module.scss"
import BackButton from '../../../../components/buttons/BackButton'
import PrimaryHeading from "../../../../components/primary-heading/PrimaryHeading"
import SelectableButton from "../../../../components/buttons/SelectableButton"
import { R } from '../../../../constants/resources'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import PriceRange from '../price-range/PriceRange'

export default function BuyerEditLeads() {
   return (
      <div className={style["container"]}>

         <div className={style["header-wrapper"]}>
            <BackButton onClick={"/buyer-lead-management"} />
            <PrimaryHeading title={"Edit Leads"} />
         </div>

         <div className={style["body-wrapper"]}>

            <p className={style["label"]}>Update Status</p>
            <SelectableButton
               containerStyle={style["selectable-button-container-style"]}
               trailingIcon={R.ic_arrow_down_blue}
               options={["Interested", "Not interested"]}
            />

            <p className={style["label"]}>Update Interest</p>

            <div className={style["interest-buttons"]}>
               <SelectableButton
                  containerStyle={style["selectable-button-container-style"]}
                  trailingIcon={R.ic_arrow_down_blue}
                  options={["Interested", "Not interested"]}
               />

               <SelectableButton
                  containerStyle={style["selectable-button-container-style"]}
                  trailingIcon={R.ic_arrow_down_blue}
                  options={["Interested", "Not interested"]}
               />
            </div>

            <p className={style["label"]}>Update Interest</p>
            <PriceRange />

            <p className={style["label"]}>Assign To</p>
            <SelectableButton
               containerStyle={style["selectable-button-container-style"]}
               trailingIcon={R.ic_arrow_down_blue}
               options={["Naman Sharma", "Aman Sharma", "Amit Sharma"]}
            />

            <PrimaryButton
               name={"Submit"}
               fontSize={"1.5rem"}
               containerStyle={style["primary-button-container-style"]}
            />
         </div>
      </div>
   )
}
