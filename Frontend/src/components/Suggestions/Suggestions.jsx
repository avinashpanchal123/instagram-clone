import React, { useState } from "react";
import styled from "styled-components";
import "./styles/Suggestions.css";

import { Avatar } from "@mui/material";

import Modal from "react-modal";
import UnfollowModal from "../UnfollowModal";
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
  return (
    <>
      <div className="suggestions">
        <div className="few_suggestions">
          <Avatar
            style={{ width: "2rem", height: "5vh" }}
            className="suggestion_user_avatar"
            alt="Remy Sharp"
            src={avatarURL}
          />
          <div>
            <h4>{userName}</h4>
            <h5>New to Instagram</h5>
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
              src={avatarURL}
            />
            <p className="modalPara">
              If you change your mind, you'll have to request to follow
              @empty_girl__00 again
            </p>
            <hr />
            <button className="unfollow_btn">Unfollow</button>
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
      </div>
    </>
  );
}

export default Suggestions;
