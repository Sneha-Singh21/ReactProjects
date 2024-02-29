import React from 'react'
import './App.css'

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
       <h1>A blog app using App write</h1>
    </>
  )
}

export default App