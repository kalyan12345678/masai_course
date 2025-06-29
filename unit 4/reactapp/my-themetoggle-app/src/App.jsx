import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { ThemeContext,ThemeContextProvider } from './themeContext'

function AppContent() {
const {theme,toggleTheme} = useContext(ThemeContext)

  const appStyle ={
      backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "20px",
    transition: "all 0.3s ease"
  }
  return (
    
     <div style={appStyle}>
      <h1>{theme.toUpperCase()}:-Mode</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
     </div>
    
  )
}

export default function App(){
  return(
    <>
    <ThemeContextProvider>
      <AppContent/>
    </ThemeContextProvider>
    </>
  )
}
