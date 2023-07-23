import React from 'react'
import TableCell from './TableCell'
import { ColumnType, DataType } from '../types/types'
import styles from '../scss/blocks/table.module.scss'

interface ITableRowProps {
    user: DataType,
    columns: ColumnType[]
}

const TableRow = ({ user, columns }:ITableRowProps) => {

    const countCols = columns.length
  return (
    <div className={styles.table__row} style={{gridTemplateColumns: `repeat(${countCols}, 1fr)`}}>
      {
        columns.map((col, index) => {
          const item = Object.values(user)[index]
          return (
            <TableCell item={item} number={index} />
          )
        
      })
      }
    </div>
  )
}

export default TableRow