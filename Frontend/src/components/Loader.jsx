import React from 'react'
import styles from "../styles/loader.module.css"

const Loader = () => {
  return (
    <>
    <div className={`${styles.main}`}>
        <h1>Loading .......</h1>
        <div className={`${styles.loader}`}></div>
    </div>
    </>
  )
}

export default Loader