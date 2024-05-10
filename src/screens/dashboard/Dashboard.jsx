import React, { useState } from 'react'
import style from "./dashboard.module.scss"
import OverviewBox from './components/overview-box/OverviewBox'
import { R } from '../../constants/resources'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import PrimaryHeading from '../../components/primary-heading/PrimaryHeading'
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table'

export default function Dashboard() {


   // const data = [
   //    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
   //    { id: 2, name: 'Jane Smith', age: 25, city: 'London' },
   //    { id: 3, name: 'Mike Brown', age: 40, city: 'Paris' },
   // ];

   // const columns = [
   //    {
   //       accessorKey: 'id',
   //       header: 'ID',
   //    },
   //    {
   //       accessorKey: 'name',
   //       header: 'Name',
   //    },
   //    {
   //       accessorKey: 'age',
   //       header: 'Age',
   //    },
   //    {
   //       accessorKey: 'city',
   //       header: 'City',
   //    },
   // ];

   // const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

   // console.log(table.getRowModel().rows)








   // const vehicleData = (vehicleNo, make, model, variant, year, km, owner, fuel, transmission, price, sellingPrice, disc) => {
   //    return { vehicleNo, make, model, variant, year, km, owner, fuel, transmission, price, sellingPrice, disc }
   // }

   // const VehicleList = [
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   //    vehicleData("HR26DL2828", "Maruti Baleno", "Dzire", "XZ", "2022", "80K", "1", "Petrol", "Automatic", "$5,90,000", "$4,00,000", "20%"),
   // ]

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

         {/* <div className={style["vehicle-table-container"]}>
            <table className="table-auto">
               <thead>
                  <tr>
                     {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                           {headerGroup.headers.map((column) => (
                              <th key={column.id}>{column}</th>
                           ))}
                        </tr>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  
                  {table.getRowModel().rows.map((row) => {
                     console.log(row)
                     return (
                        <tr key={row.id}>
                           {row.cells.map((cell) => (
                              <td key={cell.id}>{cell}</td>
                           ))}
                        </tr>
                     )
                  }
                  )}
               </tbody>
            </table>
         </div> */}

























         {/* <div className={style["vehicle-table-container"]}>
            <TableContainer className={style["table-container"]} sx={{}}>
               <Table>
                  <TableHead className={style["table-header"]} sx={{fontFamily: "Poppins", fontSize: 100}}>
                     <TableRow>
                        <TableCell>Vehicle No.</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Variant</TableCell>
                        <TableCell>Year</TableCell>
                        <TableCell>KM</TableCell>
                        <TableCell>Owner</TableCell>
                        <TableCell>Fuel</TableCell>
                        <TableCell>Transmission</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Selling Price</TableCell>
                        <TableCell>Disc</TableCell>
                     </TableRow>
                  </TableHead>

                  <TableBody>
                     {
                        VehicleList.map((data) => (
                           <TableRow
                              key={data.vehicleNo}
                              sx={{ '&:lastchild td, &:last-child th': { border: 0 }, color: "#656565" }}
                              className={style["table-body"]}
                           >
                              <TableCell>{data.vehicleNo}</TableCell>
                              <TableCell>{data.make}</TableCell>
                              <TableCell>{data.model}</TableCell>
                              <TableCell>{data.variant}</TableCell>
                              <TableCell>{data.year}</TableCell>
                              <TableCell>{data.km}</TableCell>
                              <TableCell>{data.owner}</TableCell>
                              <TableCell>{data.fuel}</TableCell>
                              <TableCell>{data.transmission}</TableCell>
                              <TableCell>{data.price}</TableCell>
                              <TableCell>{data.sellingPrice}</TableCell>
                              <TableCell>{data.disc}</TableCell>
                           </TableRow>
                        ))
                     }
                  </TableBody>
               </Table>
            </TableContainer>
         </div> */}
      </div>
   )
}