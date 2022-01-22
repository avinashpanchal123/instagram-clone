import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentInput from "./CommentInput";

function Comments(name) {
  const [commentsList, setcommentsList] = useState([]);

  const dataTransfer = (comment) => {
    let newcommentsList = [...commentsList, comment];
    setcommentsList(newcommentsList);
    console.log(newcommentsList);
  };
  return (
    <>
      {commentsList.map((comment) => {
        return (
            <div style={{margin:"0 2% 0 3%", display:"flex",justifyContent:"space-between"}}>
               <div>
                   {comment}
               </div>
               <div>
                   <FavoriteBorderIcon style={{width:"1rem"}}/>
               </div>
            </div>
        )
      })}
      <CommentInput func={dataTransfer} />
    </>
  );
}

export default Comments;
