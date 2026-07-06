import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import LoginPage from '../components/LoginPage'
import UserRegistration from './UserRegistration'
import About from '../pages/About'
import lionlogo from "../assets/lionlogo.png";
import { UserCartContext } from '../context/CartContext'
import styles from "../styles/Navbar.module.css";


const Navbar = () => {
    const { cart } = useContext(UserCartContext);
    return (
        <>
            <div className={`${styles.main}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.left}`}>
                        <div className={`${styles.logo}`}>
                            <NavLink className={`${styles.img}`}><img src={lionlogo} alt="logo.jpg" /></NavLink>
                        </div>
                    </div>
                    <div className={`${styles.right}`}>
                        <ul className={`${styles.list}`}>
                            <li className={`${styles.item}`}><NavLink to="/" end className={({ isActive }) =>
                                isActive ? `${styles.home} ${styles.active}` : styles.home}>Home</NavLink></li>
                            <li className={`${styles.item}`}><NavLink to="/about" className={({ isActive }) =>
                                isActive ? `${styles.about} ${styles.active}` : styles.about}>About me</NavLink></li>
                            <li className={`${styles.item}`}><NavLink to="/login" className={({ isActive }) =>
                                isActive ? `${styles.login} ${styles.active}` : styles.login}>Login</NavLink></li>
                            <li className={`${styles.item}`}><NavLink to="/register" className={({ isActive }) =>
                                isActive ? `${styles.signup} ${styles.active}` : styles.signup}>Signup</NavLink></li>
                            <li className={`${styles.item}`}><NavLink to="/products" className={({ isActive }) =>
                                isActive ? `${styles.products} ${styles.active}` : styles.products}>Products</NavLink></li>
                            <li className={`${styles.item}`}><NavLink to="/cart" className={({ isActive }) =>
                                isActive ? `${styles.cart} ${styles.active}` : styles.cart}>Cart : <span>{cart.length}</span></NavLink></li>
                            <li className={`${styles.item}`}><NavLink to="/tasks" className={({ isActive }) =>
                                isActive ? `${styles.tasks} ${styles.active}` : styles.tasks}>Tasks</NavLink></li>
                        </ul>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar