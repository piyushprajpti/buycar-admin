import React from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import style from "./detailTable.module.scss"

export default function DetailTable() {

   const data = [
      {
         vehicleNo: 'DL12AB3456',
         make: 'Maruti Suzuki',
         model: 'Swift',
         variant: 'VXi',
         year: 2020,
         km: 50000,
         owner: 'John Doe',
         fuel: 'Petrol',
         transmission: 'Manual',
         price: 500000,
         sellingPrice: 450000,
         disc: 10,
      },
      {
         vehicleNo: 'RJ09BH7865',
         make: 'Hyundai',
         model: 'Creta',
         variant: 'SX',
         year: 2022,
         km: 10000,
         owner: 'Jane Doe',
         fuel: 'Diesel',
         transmission: 'Automatic',
         price: 1200000,
         sellingPrice: 1150000,
         disc: 4,
      },
      {
         vehicleNo: 'RJ09BH7865',
         make: 'Hyundai',
         model: 'Creta',
         variant: 'SX',
         year: 2022,
         km: 10000,
         owner: 'Jane Doe',
         fuel: 'Diesel',
         transmission: 'Automatic',
         price: 1200000,
         sellingPrice: 1150000,
         disc: 4,
      },
      {
         vehicleNo: 'RJ09BH7865',
         make: 'Hyundai',
         model: 'Creta',
         variant: 'SX',
         year: 2022,
         km: 10000,
         owner: 'Jane Doe',
         fuel: 'Diesel',
         transmission: 'Automatic',
         price: 1200000,
         sellingPrice: 1150000,
         disc: 4,
      },
      {
         vehicleNo: 'RJ09BH7865',
         make: 'Hyundai',
         model: 'Creta',
         variant: 'SX',
         year: 2022,
         km: 10000,
         owner: 'Jane Doe',
         fuel: 'Diesel',
         transmission: 'Automatic',
         price: 1200000,
         sellingPrice: 1150000,
         disc: 4,
      },
   ];

   const columns = [
      { accessorKey: 'vehicleNo', header: 'Vehicle No.' },
      { accessorKey: 'make', header: 'Make' },
      { accessorKey: 'model', header: 'Model' },
      { accessorKey: 'variant', header: 'Variant' },
      { accessorKey: 'year', header: 'Year' },
      { accessorKey: 'km', header: 'KM' },
      { accessorKey: 'owner', header: 'Owner' },
      { accessorKey: 'fuel', header: 'Fuel' },
      { accessorKey: 'transmission', header: 'Transmission' },
      { accessorKey: 'price', header: 'Price' },
      { accessorKey: 'sellingPrice', header: 'Selling Price' },
      { accessorKey: 'disc', header: 'Disc' },
   ];

   const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });


   return (
      <div className={style["vehicle-table-container"]}>
         <table className={style["table-wrapper"]} cellSpacing={"5px"}>
            <thead>
               {table.getHeaderGroups().map(headerGroup => {
                  return (
                     <tr key={headerGroup.id} className={style["table-header-wrapper"]}>
                        {headerGroup.headers.map(header => {
                           console.log(header)
                           return (
                              <th key={header.id} className={style["table-header"]}>
                                 {header.column.columnDef.header}
                              </th>
                           )
                        })}
                     </tr>
                  )
               })}
            </thead>
            <tbody>
               {table.getRowModel().rows.map((row) => {
                  return (
                     <tr key={row.id} className={style["table-row"]}>
                        {row.getVisibleCells().map((cell) => {
                           console.log(cell.column.columnDef.accessorKeyKey)
                           return (
                              <td key={cell.id}>
                                 {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                 )}
                              </td>
                           )
                        })}
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   )
}
