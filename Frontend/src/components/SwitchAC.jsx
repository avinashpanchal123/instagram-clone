import React from "react";
import { Avatar } from "@mui/material";
import "./styles/SwitchAC.css"

function SwitchAC({userName,name,avatarURL}) {
  return (
    <>
      <div className="switch_user_div">
        <Avatar style={{width: "3.4rem", height:"9vh"}}
          className="user_avatar"
          alt="Remy Sharp"
          src={avatarURL}
        />
        <div>
            <h4>{userName}</h4>
            <h4>{name}</h4>
        </div>
        <div>
            <button className="switch_btn">Switch</button>
        </div>
      </div>
    </>
  );
}

export default SwitchAC;
