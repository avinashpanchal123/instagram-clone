const express = require("express");
const app = express();

// const cors = require("cors");

// app.use(cors())

app.use(express.json());
app.use((req, res, next) => {
    
    res.header({"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"});
    
    next();
  }) 

const {register,login,router} = require ("./controllers/user.controller");

app.use("/signup", register);
app.use("/login", login);

app.get("/user/:id",async(req, res)=>{
  try{
      const posts = await User.findById(req.params.id).lean().exec();
      return res.send(posts);
  }
  catch(e){
      return res.status(400).json({ status:"failled", messege: e.messege});
  }
})

module.exports = {register,login}




const postController = require("./controllers/post.controller");

app.use("/post", postController);


const commentController = require ("./controllers/comment.controller")

app.use("/comment", commentController);

const likeController = require ("./controllers/like.controller");

app.use("/like", likeController);



module.exports= app;