import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboardlayout = () => {
  return (
    <>
    <div style={{display:"flex"}}>
    <Sidebar/>
    <main style={{flex:1}}>
      <Outlet/>
    </main>

    </div>
    </>
  )
}

export default Dashboardlayout