import React from 'react'
import Home from './component/Home.js';
// import Footer from './Components/Footer/Footer';
import { Route } from 'react-router-dom';
import Login from './component/Login';
import Hedar from './component/Hedar';
// import "bootstrap/dist/css/bootstrap.main.css"

export default function App() {
  return (
    <div>
{/* <h1>بودكاست </h1> */}
      {/* <Home/>
      <Login/> */}
      {/* <Navbar /> */}
   
         <Route  path="/" component={Hedar }Route/>
          <Route path="/Home" component={Home }Route/>
          <Route exact path="/Login" component={Login }Route/>
     
 
    </div>
  )
}