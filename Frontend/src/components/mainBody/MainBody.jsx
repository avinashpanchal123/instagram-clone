
import React, { useEffect, useState } from "react";
import "./MainBody.css"
import Post from "../../components/posts/Post";
import Suggestions from "../Suggestions";
import Navbar from "../Navbar";
import SwitchAC from "../SwitchAC"
import SeeAll from "../SeeAll"

function MainBody() {
    const [post, setPost] = useState([]);
    useEffect(() => {
      fetch("https://instagram-backend-dipu1-app.herokuapp.com/post")
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          console.log(data);
        });
    }, []);
  return (
    <>
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
          <SwitchAC/>
          <SeeAll/>
            <Suggestions/>
        </div>
      </div> 
      </>
  )
}

export default MainBody;
