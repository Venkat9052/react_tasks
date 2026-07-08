import React from 'react'
import AppRoutes from './routes/AppRoutes'
import ThemeContext from './context/ThemeContext'
import { useContext } from 'react'

const App = () => {

  const {theme}=useContext(ThemeContext);

  return (
    <>
    <div className={theme === "dark" ? "dark" : ""}>

    <AppRoutes/>
    </div>
    </>
  )
}

export default App