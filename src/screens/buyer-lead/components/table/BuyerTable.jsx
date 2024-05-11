import React from 'react'
import style from "./buyerTable.module.scss"
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

export default function BuyerTable() {
   const data = [
      {
         name: 'Reenu Sharma',
         phoneNo: '1234567890',
         budget: '5,00,000',
         status: 'Booked',
         action: 'Action',
      },
      {
         name: 'Reenu Sharma',
         phoneNo: '1234567890',
         budget: '5,00,000',
         status: 'Booked',
         action: 'Action',
      },
      {
         name: 'Reenu Sharma',
         phoneNo: '1234567890',
         budget: '5,00,000',
         status: 'Booked',
         action: 'Action',
      },
      {
         name: 'Reenu Sharma',
         phoneNo: '1234567890',
         budget: '5,00,000',
         status: 'Booked',
         action: 'Action',
      },
      {
         name: 'Reenu Sharma',
         phoneNo: '1234567890',
         budget: '5,00,000',
         status: 'Booked',
         action: 'Action',
      },
      {
         name: 'Reenu Sharma',
         phoneNo: '1234567890',
         budget: '5,00,000',
         status: 'Booked',
         action: 'Action',
      },
      {
         name: 'Reenu Sharma',
         phoneNo: '1234567890',
         budget: '5,00,000',
         status: 'Booked',
         action: 'Action',
      },
   ];

   const columns = [
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'phoneNo', header: 'Phone No.' },
      { accessorKey: 'budget', header: 'Budget' },
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
