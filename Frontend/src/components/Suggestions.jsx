import React from 'react';

import "./styles/Suggestions.css"

import { Avatar } from "@mui/material";

function Suggestions({userName,avatarURL}) {
  return (
      <>
     
     <div className="suggestions">
     <div className='few_suggestions'>
      <Avatar style={{width:"2rem",height:"5vh"}}
          className="suggestion_user_avatar"
          alt="Remy Sharp"
          src={avatarURL}
        />
        <div>
            <h4>{userName}</h4>
            <h5>New to Instagram</h5>
        </div>
        <div>
            <button className='follow_btn'>Follow</button>
        </div>
      </div>
    
     </div>
      </>
  )
}

export default Suggestions;
