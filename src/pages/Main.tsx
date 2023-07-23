import React, { useState } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Form from '../components/Form'
import Table from '../components/Table'
import { deleteItemMode, users } from '../redux/selectors/selectors'
import { useSelector } from 'react-redux'

import styles from '../scss/main-page.module.scss'
import Modal from '../components/Modal'
import { DataType } from '../types/types'
import Footer from '../components/Footer'

const columns = [
    {colId: 0, title: '№', name: 'id'},
    {colId: 1, title: 'First name', name: 'firstName'},
    {colId: 2, title: 'Last name', name: 'lastName'},
    {colId: 3, title: 'E-mail', name: 'email'},
    {colId: 4, title: 'Actions', name: 'actions'}
]

const Main = () => {
  const usersList = useSelector(users)
  const deleteMode = useSelector(deleteItemMode)

  // const usersFromLs = localStorage.getItem('users') || []

  const usersData = JSON.parse(localStorage.getItem('users')!) || usersList

  const [focusUser, setFocusUser] = useState<DataType>(usersData[0])

  return (
    <div className={styles.main_page}>
      <Header />
      <Layout>
        <Form />
        { usersData.length ? <Table columns={columns} data={usersData} setFocusUser={setFocusUser} /> : <div>Нет пользователей ...</div> }
      </Layout>
      <Footer />
      <div className={deleteMode ? styles.modal_wrapper + ' ' + styles.modal_active : styles.modal_wrapper}>
          <Modal user={focusUser} />
          
      </div> 
      <div className={deleteMode ? styles.overlay + ' ' + styles.modal_active : styles.overlay}></div>
    </div>
  )
}

export default Main