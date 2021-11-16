import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"
export default function hedar() {
    return (
        <div>
            <ul>
              
                 <li>
                    <Link to="/Home">home</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                    </li>
              
            </ul>
        </div>
    )
}
