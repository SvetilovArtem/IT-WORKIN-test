import React from 'react'
import styles from '../scss/blocks/table.module.scss'
import { ColumnType, DataType } from '../types/types'
import TableRow from './TableRow'
import { useDispatch } from 'react-redux'
import { toggleDeleteItemMode } from '../redux/slices/userSlice'

interface ITableProps {
    columns: ColumnType[]
    data?: DataType[]
    setFocusUser: (user:DataType) => void
}

const Table = ({ columns, data, setFocusUser }:ITableProps) => {
    const dispatch = useDispatch()

    const deleteHandler = (user:DataType) => {
        dispatch(toggleDeleteItemMode(true))
        setFocusUser(user)
    }
  return (
    <div className={styles.table}>
        <div className={styles.columns} style={{gridTemplateColumns: `repeat(${columns.length}, 1fr)`}}>
            {
                columns.map((col, index) => {
                    return (
                        <div className={styles.columns}>
                            <div className={styles.col_item}>{col.title}</div>
                        </div>
                    )
                })

            }

        </div>
        <div className={styles.table_content}>
            {data?.map((u, index) => {
                const user = { 
                    id: index + 1, 
                    ...u, 
                    actions: [
                        <span className="material-symbols-outlined" onClick={() => deleteHandler(u)}>delete</span>, 
                    ] 
                }
                return (
                    <TableRow user={user} columns={columns} />
                )
            })}
        </div>
    </div>
  )
}

export default Table