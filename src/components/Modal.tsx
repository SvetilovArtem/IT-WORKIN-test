import React from 'react'
import styles from '../scss/blocks/modal.module.scss'
import { useDispatch } from 'react-redux'
import { deleteUser, toggleDeleteItemMode } from '../redux/slices/userSlice'

import { DataType } from '../types/types'

interface IModalProps {
    user: DataType
}

const Modal = ({ user }:IModalProps) => {
    const dispatch = useDispatch()

    const actionHandler = () => dispatch(toggleDeleteItemMode(false))

    const deleteHandler = () => {
        console.log(user?.id)
        dispatch(deleteUser(user))
        dispatch(toggleDeleteItemMode(false))
    }
  return (
    <div className={styles.modal}>
        <h3>Вы уверены, что хотите удалить пользователя {user?.firstName + ' ' + user?.lastName}?</h3>
        <div className={styles.buttons}> 
            <button className={styles.button + ' ' + styles.delete_btn} onClick={deleteHandler}>Удалить</button>
            <button className={styles.button + ' ' + styles.cancel_btn} onClick={actionHandler}>Отменить</button>
        </div>
    </div>
  )
}

export default Modal