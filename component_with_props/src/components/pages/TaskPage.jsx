import React from 'react'
import Navbar from "../Navbar"
import PageTransition from '../PageTransition'

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