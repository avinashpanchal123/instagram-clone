import React, { useState,useEffect } from "react";
import styled from "styled-components";
import "./styles/Suggestions.css";

import { Avatar } from "@mui/material";

import Modal from "react-modal";
import UnfollowModal from "./UnfollowModal";
import { grey } from "@mui/material/colors";
const Modal_styles = {
  content: {
    color: "black",
    background: "white",
    width: "25rem",
    height: "20rem",
    margin: "20vh 32%",
    borderRadius: "1rem",
    overflow: "hidden",
  },
  // ,
  // overlay:{
  //   background:""
  // }
};

function Suggestions({ userName, avatarURL }) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const ModalHandler = () => {
    setmodalIsOpen(true);
  };
  const [user, setUser] = useState([]);
  

  useEffect(() => {
  

    fetch(`http://localhost:3005/user`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
    },[]);
    console.log(user);
  return (
    <>
      <div className="suggestions">
       {
         
         user.map((el)=>{
         let img = el.profile_picture
           return (
             <>
              <div className="few_suggestions">
          <Avatar
            style={{ width: "2rem", height: "5vh" }}
            className="suggestion_user_avatar"
            alt="Remy Sharp"
            src={el.profile_picture}
          />
          <div>
            <h4>{el.username}</h4>
            <h5>{el.full_name}</h5>
          </div>
          <div>
            <button onClick={ModalHandler} className="follow_btn">
              Follow
            </button>
          </div>
        </div>
        <div className="modal_div">
          <Modal
            style={Modal_styles}
            isOpen={modalIsOpen}
            onRequestClose={() => {
              setmodalIsOpen(false);
            }}
          >
            <Avatar
              style={{ width: "4rem", height: "9vh" }}
              className="unfollow_avatar"
              alt="Remy Sharp"
              src={img}
            />
            <p className="modalPara">
              If you change your mind, you'll have to request to follow {     }
           <strong>{el.username}</strong> again
            </p>
            <hr />
            <button
             onClick={() => {
              setmodalIsOpen(false);
            }}
             className="unfollow_btn">Unfollow</button>
            <hr />
            <button
              onClick={() => {
                setmodalIsOpen(false);
              }}
              className="cancle_btn"
            >
              Cancle
            </button>
          </Modal>
        </div>
             </>
           )
         })
       }
      </div>
    </>
  );
}

export default Suggestions;
