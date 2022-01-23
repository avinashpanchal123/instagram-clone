import React, { useState,useEffect } from "react";
import { Avatar } from "@mui/material";
import "./styles/SwitchAC.css"
import {Link} from "react-router-dom"

function SwitchAC({userName,name,avatarURL}) {
  const [user, setUser] = useState([]);
  

  useEffect(() => {
    let token = JSON.parse (localStorage.getItem ('user'));
    console.log(token);
    

    fetch(`http://localhost:3005/user/${token[0]}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
    },[]);
 console.log(user);
  return (
    <>
      <div className="switch_user_div">
        <Avatar style={{ width: "4rem", height: "9vh" }}
          className="user_avatar"
          alt="Remy Sharp"
          src={user?.profile_picture}
        />
        <div>
            <h4>{user?.username}</h4>
            {/* <h4>{user?.full_name}</h4> */}
        </div>
        <div>
            <Link to="/">
            <button className="switch_btn">Switch</button>
            </Link>
        </div>
      </div>
    </>
  );
}

export default SwitchAC;
