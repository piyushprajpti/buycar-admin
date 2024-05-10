import React from 'react'
import style from "./sellerEditLeads.module.scss"
import BackButton from '../../../../components/buttons/BackButton'
import PrimaryHeading from '../../../../components/primary-heading/PrimaryHeading'
import { R } from '../../../../constants/resources'
import SelectableButton from '../../../../components/buttons/SelectableButton'
import PrimaryButton from '../../../../components/buttons/PrimaryButton'
import InputField from '../../../../components/input-field/InputField'

export default function SellerEditLeads() {
   return (
      <div className={style["container"]}>

         <div className={style["header-wrapper"]}>
            <BackButton onClick={"/seller-lead-management"} />
            <PrimaryHeading title={"Edit Leads"} />
         </div>

         <div className={style["body-wrapper"]}>

            <p className={style["label"]}>Update Status</p>
            <SelectableButton
               containerStyle={style["selectable-button-container-style"]}
               trailingIcon={R.ic_arrow_down_blue}
               options={["Interested", "Not interested"]}
            />

            <div className={style["price-section"]}>

               <div className={style["price-box"]}>
                  <p className={style["label"]}>Seller Price</p>
                  <InputField placeholder={"Price"} />
               </div>

               <div className={style["price-box"]}>
                  <p className={style["label"]}>Our Price</p>
                  <InputField placeholder={"Price"} />
               </div>

            </div>

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
