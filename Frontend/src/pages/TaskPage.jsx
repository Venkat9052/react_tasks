import React from 'react'
import Navbar from "../components/Navbar"
import PageTransition from '../components/PageTransition'
import Sidebar from '../components/Sidebar'

const TaskPage = () => {
  return (
    <>
    <PageTransition>
    <Navbar/>
    </PageTransition>
    </>
  )
}

export default TaskPage