const express = require("express");
const app = express();
// const cors = require("cors");

// app.use(cors())

app.use(express.json());
app.use((req, res, next) => {
    
    res.header({"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"});
    
    next();
  }) 

const {register,login} = require ("./controllers/user.controller");

app.use("/signup", register);
app.use("/login", login);




const postController = require("./controllers/post.controller");

app.use("/post", postController);


const commentController = require ("./controllers/comment.controller")

app.use("/comment", commentController);

const likeController = require ("./controllers/like.controller");

app.use("/like", likeController);



module.exports= app;