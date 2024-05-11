import React from 'react'
import style from "./sellerTable.module.scss"
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

export default function SellerTable() {

   const data = [
      {
         sellerName: 'Reenu Sharma',
         phoneNo: '1234567890',
         make: 'Maruti Baleno',
         model: 'Dzire',
         variant: 'VXi',
         sellingPrice: '5,00,000',
         ourPrice: '5,00,000',
         status: 'Active',
         action: 'Action',
      },
      {
         sellerName: 'Reenu Sharma',
         phoneNo: '1234567890',
         make: 'Maruti Baleno',
         model: 'Dzire',
         variant: 'VXi',
         sellingPrice: '5,00,000',
         ourPrice: '5,00,000',
         status: 'Active',
         action: 'Action',
      },
      {
         sellerName: 'Reenu Sharma',
         phoneNo: '1234567890',
         make: 'Maruti Baleno',
         model: 'Dzire',
         variant: 'VXi',
         sellingPrice: '5,00,000',
         ourPrice: '5,00,000',
         status: 'Active',
         action: 'Action',
      },
      {
         sellerName: 'Reenu Sharma',
         phoneNo: '1234567890',
         make: 'Maruti Baleno',
         model: 'Dzire',
         variant: 'VXi',
         sellingPrice: '5,00,000',
         ourPrice: '5,00,000',
         status: 'Active',
         action: 'Action',
      },
      {
         sellerName: 'Reenu Sharma',
         phoneNo: '1234567890',
         make: 'Maruti Baleno',
         model: 'Dzire',
         variant: 'VXi',
         sellingPrice: '5,00,000',
         ourPrice: '5,00,000',
         status: 'Active',
         action: 'Action',
      },
      {
         sellerName: 'Reenu Sharma',
         phoneNo: '1234567890',
         make: 'Maruti Baleno',
         model: 'Dzire',
         variant: 'VXi',
         sellingPrice: '5,00,000',
         ourPrice: '5,00,000',
         status: 'Active',
         action: 'Action',
      },
      {
         sellerName: 'Reenu Sharma',
         phoneNo: '1234567890',
         make: 'Maruti Baleno',
         model: 'Dzire',
         variant: 'VXi',
         sellingPrice: '5,00,000',
         ourPrice: '5,00,000',
         status: 'Active',
         action: 'Action',
      },
      
   ];

   const columns = [
      { accessorKey: 'sellerName', header: 'Seller Name' },
      { accessorKey: 'phoneNo', header: 'Phone No.' },
      { accessorKey: 'make', header: 'Make' },
      { accessorKey: 'model', header: 'Model' },
      { accessorKey: 'variant', header: 'Variant' },
      { accessorKey: 'sellingPrice', header: 'Selling Price' },
      { accessorKey: 'ourPrice', header: 'Our Price' },
      { accessorKey: 'status', header: 'Status' },
      { accessorKey: 'action', header: 'Action' },
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
