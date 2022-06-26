import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Login from './routes/Authentication/Login'
import Register from './routes/Authentication/Register'
import Home from './routes/Home'
import Work from './routes/Work'

const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
      </Routes>
    </div>
  )
}

export default App