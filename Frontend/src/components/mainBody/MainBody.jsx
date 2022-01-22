
import React, { useEffect, useState } from "react";
import "./MainBody.css"
import Post from "../../components/posts/Post";
import Suggestions from "../Suggestions";
import Navbar from "../Navbar";

function MainBody() {
    const [post, setPost] = useState([]);
    useEffect(() => {
      fetch("http://localhost:2345/post")
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
        <div className="suggestions">
            <Suggestions/>
        </div>
      </div> 
      </>
  )
}

export default MainBody;
