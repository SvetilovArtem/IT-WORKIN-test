import React from 'react'
import styles from '../scss/blocks/table.module.scss'

interface ITableCellProps {
    item: any,
    number: number
}

const TableCell = ({ item, number }:ITableCellProps) => {
  return (
      typeof(item) === 'object' 
      ? 
      <div className={styles.table_cell}>
        {item.map((el:string) => <span className={styles.action}>{ el }</span>)}
      </div>  
      : 
      <div className={styles.table_cell}>{ item }</div> 
      
  )
}

export default TableCell