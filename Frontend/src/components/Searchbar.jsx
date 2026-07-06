import React from 'react'
import styles from "../styles/search.module.css"

const Searchbar = ({search,setSearch}) => {
  return (
    <>
    <div className={`${styles.main}`}>
        <input  className={`${styles.searchinp}`} type="text" value={search} 
        onChange={(e)=>setSearch(e.target.value)} placeholder='Search by Name, City, Company'/>
    </div>
    </>
  )
}

export default Searchbar