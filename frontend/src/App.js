import React from 'react'
import Login from './component/Login'
import Home from './component/Home'
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#">الرئيسيه</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">المفضلة</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">القصص</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">تسجيل الدخول</a>
         </li>
       </ul>
       <form class="d-flex">
         <input class="form-control me-2" type="search" placeholder="بحث" aria-label="بحث"/>
         <button class="btn btn-outline-success" type="submit">البحث </button>
       </form>
     </div>
   </div>
 </nav>
      {/* <Login /> */}
              <Home/>
    

    </div>
  )
}