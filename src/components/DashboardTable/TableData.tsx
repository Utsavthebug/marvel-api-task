import React from 'react'
import { Character } from '.'
import TableRow from './TableRow'

interface TableDataProps{
    data: Array<Character>
}

const TableData : React.FC<TableDataProps> = ({data}) => {
  return (
   <tbody>
    {
        data.map((d)=>(
        <TableRow data={d}/>    
        ))
    }
    
   </tbody>
  )
}

export default TableData