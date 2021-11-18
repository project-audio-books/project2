
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function NavBar() {
  const [Users, setUsers] = useState([]);
  const [input, setPassword] = useState("");
  const [NewUsers, setNewUsers] = useState("");
  const history = useHistory();
  const interuser = (e) => {
    setNewUsers(e.target.value);
  };
  const interbass = (e) => {
    setPassword(e.target.value);
  };
  const singIn = async () => {
    const res = await axios.post("http://localhost:5000/login", {
      username: NewUsers,
      password: input,
    });
    if (res.data === "login correct") {
      history.push("/Home");
    }
    setUsers(res.data);
    console.log(res.data);
  };
  return (
    <div>
     
      <div className="btn">
        <input
          onChange={(e) => {
            interuser(e);
          }}
          type="text"
          placeholder="UserName"
        />
        <br />
        <br />
        <input
          onChange={(e) => {
            interbass(e);
          }}
          type="text"
          placeholder="Password"
        />
        <br />
        <br />
        <button
          onClick={(e) => {
            singIn();
          }}
        >
          sign in
        </button>{" "}
      </div>
      <h1>{Users}</h1>
    </div>
  );
}






