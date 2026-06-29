import React from 'react'
import Navbar from "../components/Navbar"
import PageTransition from '../components/PageTransition'

const TaskPage = () => {
  return (
    <>
    <PageTransition>
    <Navbar/>
    <div>TaskPage</div>
    </PageTransition>
    </>
  )
}

export default TaskPage