import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "../styles/sidebar.module.css"

const Sidebar = () => {
  return (
    <>
      <div className={`${styles.main}`}>
        <ul className={`${styles.container}`}>
          <li><NavLink to="/dashboard" end className={({isActive}) => isActive ? (`${styles.link} ${styles.isactive}`) : (`${styles.link}`)}>Dashboard</NavLink></li>
         <li>
          <NavLink to="/dashboard/profile" className={({isActive}) => isActive ? (`${styles.link} ${styles.isactive}`) : (`${styles.link}`)}>Profile</NavLink>
          </li> 
          <li>
            <NavLink to="/dashboard/users" className={({isActive}) => isActive ? (`${styles.link} ${styles.isactive}`) : (`${styles.link}`)}>User</NavLink>
            </li>
          <li>
          <NavLink to="/dashboard/settings" className={({isActive}) => isActive ? (`${styles.link} ${styles.isactive}`) : (`${styles.link}`)}>Settings</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar