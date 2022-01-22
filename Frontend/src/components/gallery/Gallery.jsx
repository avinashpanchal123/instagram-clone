import React, { useState } from 'react';
import "../styles/Gallery.css"

function Gallery() {
    let i = 0
  const [post, setPost] = useState([
    "https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg",
    "https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg",
    "https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg",
    "https://i.ibb.co/gP41JMd/Screenshot-2021-0622-215115.jpg"
  ])
  
  return <>
    
      {post.map(()=>{
      return  <div className="post_img_div">
          <img src={post[i]} alt="post" />
        
        </div>
        i++
      })
    
      }
    
  </>
}

export default Gallery;
