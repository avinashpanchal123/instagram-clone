import React, { useState, useEffect} from 'react';
import "../styles/Gallery.css"


function Gallery() {
  const [pic, setPic] = useState([]);

    useEffect(() => {
      fetch("https://instagram-backend-dipu1-app.herokuapp.com/post/61e93bc2f10b65e594c6cc5f")
        .then((res) => res.json())
        .then((data) => {
          setPic(data);
          console.log(data);
        });
    }, []);
  
  return <>
    
      {pic.map((el)=>{
      return  <div className="post_img_div">
          <img src={el.picture} alt="post" />
        
        </div>
      
      })
    
      }
    
  </>
}

export default Gallery;
