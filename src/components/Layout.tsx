import React from 'react'
import styles from '../scss/blocks/layout.module.scss'

interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }:ILayoutProps) => {
  return (
    <div className={styles.container}>
        { children }
    </div>
  )
}

export default Layout