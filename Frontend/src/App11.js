import React, { useEffect,useState } from "react";

import "./App.css";
import SwitchAC from "./components/SwitchAC";
import Navbar from "./components/Navbar";
import Post from "./components/posts/Post";
import Suggestions from "./components/Suggestions";
import Comments from "./components/comments/Comments";
import SeeAll from "./components/SeeAll";

import Profile from "./components/Profile";


const App = () => {
  // const [posts, setPost] = useState([
  //   {
  //     userName: "Avinash",
  //     postURL: "https://i.ibb.co/981hrmV/quotes01.png",
  //     avatarURL: "https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg",
  //     comment: "I like it",
  //   },
   
  // ]);

  const[post,setPost] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:2345/post")
    .then(res=> res.json())
    .then(data=>{
      setPost(data);
      console.log(data);

    })
  },[])

  return (
    <div className="app">
      <Navbar />

      <div className="main_body">
        <div className="post_side">
          {post.map((post) => {
            return (
              <Post
                userName={post.full_name}
                postURL={post.picture}
                avatarURL="https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg"
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
     <Profile/>
    </div>
  );
};

export default App;
