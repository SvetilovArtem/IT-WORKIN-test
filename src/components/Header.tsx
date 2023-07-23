import React from 'react'
import styles from '../scss/blocks/header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>User Management</h2>
    </div>
  )
}

export default Header