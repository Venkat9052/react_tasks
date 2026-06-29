import React from 'react'
import styles from "../styles/login.module.css"
import Navbar from "./Navbar"
import PageTransition from './PageTransition'

const LoginPage = () => {
  return (
    <>
    <PageTransition>
    <Navbar/>
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.head}><h1>Login ...</h1></div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                <input type="text" placeholder='' id="email"/>
                <label htmlFor='email'>Email </label>
                </div>
                <div className={styles.input}>
                <input type="text" placeholder='' id="password"/>
                <label htmlFor='password'>Password </label>
                </div>
            </div>
            <div className={styles.loginbut}>
                <button type="submit" >Login...</button>
            </div>
        </div>
    </div>
    </PageTransition>
    </>
  )
}

export default LoginPage