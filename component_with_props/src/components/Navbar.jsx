import React from 'react'
import Homepage from './pages/Homepage'
import LoginPage from './LoginPage'
import UserRegistration from './UserRegistration'
import About from './pages/About'
import styles from "../styles/Navbar.module.css";
import lionlogo from "../assets/lionlogo.png";
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className={`${styles.main}`}>
    <div className={`${styles.container}`}>
        <div className={`${styles.left}`}>
            <div className={`${styles.logo}`}>
                <Link className={`${styles.img}`}><img src={lionlogo} alt="logo.jpg"/></Link>
            </div>
        </div>
        <div className={`${styles.right}`}>
            <ul className={`${styles.list}`}>
                <li className={`${styles.item}`}><Link to="/" className={`${styles.home}`}>Home</Link></li>
                <li className={`${styles.item}`}><Link to="/about" className={`${styles.about}`}>About me</Link></li>
                <li className={`${styles.item}`}><Link to="/login" className={`${styles.login}`}>Login</Link></li>
                <li className={`${styles.item}`}><Link to="/register" className={`${styles.signup}`}>Signup</Link></li>
                <li className={`${styles.item}`}><Link to="/tasks" className={`${styles.signup}`}>Tasks</Link></li>
            </ul>
            
        </div>
    </div>
    </div>


    </>
  )
}

export default Navbar