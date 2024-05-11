import React, { useState } from 'react'
import style from "./dashboard.module.scss"
import OverviewBox from './components/overview-box/OverviewBox'
import { R } from '../../constants/resources'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PrimaryHeading from '../../components/primary-heading/PrimaryHeading'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import DetailTable from '../../components/tables/DetailTable'

export default function Dashboard() {

   


   return (
      <div className={style["container"]}>

         <PrimaryHeading title={"Dashboard"} fontSize={"1.75rem"} fontWeight={600} />

         <div className={style["overview-box-container"]}>

            <OverviewBox
               title={"Total Visitor"}
               value={"40,689"}
               icon={R.ic_total_visitor}
               isPositive={true}
               changePercent={"8.5%"}
               timeDuration={"yesterday"}
            />
            <OverviewBox
               title={"Total Buyer"}
               value={"10,293"}
               icon={R.ic_total_buyer}
               isPositive={true}
               changePercent={"1.3%"}
               timeDuration={"past week"}
            />
            <OverviewBox
               title={"Total Seller"}
               value={"$89,000"}
               icon={R.ic_total_seller}
               isPositive={false}
               changePercent={"4.3%"}
               timeDuration={"yesterday"}
            />
            <OverviewBox
               title={"Total Pending"}
               value={"2040"}
               icon={R.ic_total_pending}
               isPositive={true}
               changePercent={"1.8%"}
               timeDuration={"yesterday"}
            />

         </div>
         
         <DetailTable />
      </div>
   )
}