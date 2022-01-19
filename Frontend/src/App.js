import React, { useState } from "react";

import "./App.css";
import SwitchAC from "./components/SwitchAC";
import Navbar from "./components/Navbar";
import Post from "./components/posts/Post";
import Suggestions from "./components/Suggestions";
import Comments from "./components/comments/Comments";
import SeeAll from "./components/SeeAll";

const App = () => {
  const [posts, setPost] = useState([
    {
      userName: "Avinash",
      postURL: "https://i.ibb.co/981hrmV/quotes01.png",
      avatarURL: "https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg",
      comment: "I like it",
    },
   
  ]);

  return (
    <div className="app">
      <Navbar />

      <div className="main_body">
        <div className="post_side">
          {posts.map((post) => {
            return (
              <Post
                userName={post.userName}
                postURL={post.postURL}
                avatarURL={post.avatarURL}
                comment={post.comment}
              />
            );
          })}
      
        </div>
        <div className="ac_follow_side">
          <SwitchAC
            userName="avi.nash7602"
            name="Avinash"
            avatarURL="https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg"
          />
          <SeeAll />
          <Suggestions 
            userName="avi.nash7602"
            avatarURL="https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg"
          />
          <Suggestions 
            userName="avi.nash7602"
            avatarURL="https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg"
          />
          <Suggestions 
            userName="avi.nash7602"
            avatarURL="https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg"
          />
          <Suggestions 
            userName="avi.nash7602"
            avatarURL="https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg"
          />
            <Suggestions 
            userName="avi.nash7602"
            avatarURL="https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg"
          />
         
        </div>
      </div>
     
    </div>
  );
};

export default App;
