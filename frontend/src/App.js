import React from 'react'
import Home from './component/Home.js';
import Navbar from './component/Navbar';
// import Footer from './Components/Footer/Footer';
import { Routes,Route } from 'react-router';
import Login from './component/Login';
export default function App() {
  return (
    <div>
      <Navbar />
      <div >
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Navbar" element={<Navbar />}></Route>
        </Routes>
      </div>
    </div>
  )
}