const app = require("./app");
const connect = require("./configs/db");


app.listen(2345, async ()=>{
    await connect();
    console.log("listening to port 2345");
})