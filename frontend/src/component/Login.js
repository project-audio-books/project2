import React ,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import "./login.css";
export default function Login() {
//    const history= useHistory()
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [alluser, setalluser] = useState([])

    const submitForm =(e)=>{e.preventDefault()
const Newuser= {email:email, password:password}

setalluser ([...alluser,Newuser])}
console.log(alluser);


    return (
        <div className="logIn">
             
 <div>
    <form onsubmit={submitForm}>

        <span> LOG IN </span>
            <div className =" emilLog"> 
                   <input onChange={(e)=>setemail(e.target.value)} 
                    className="inpLog1"
                   type="text" 
                   placeholder="enter your email "
                   />
            </div>


            <div className =" passLog"> 
                   <input onChange={(e)=>setpassword(e.target.value)} 
                    className="inpLog2"
                   type="password" 
                   placeholder="enter your password"
                   />


            </div>
            {/* <label> Remember me </label> */}

           <button  onClick={onsubmit}> LOGN </button>

                </form> 


            </div> {alluser.map((curElem)=>{

             <div>
                   <p>{curElem.email}</p>
                   <p>{curElem.password}</p>
            </div>
                })
            }
             </div>
    )
}
