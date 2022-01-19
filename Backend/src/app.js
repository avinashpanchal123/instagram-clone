const express = require("express");
const app = express();

app.use(express.json());

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