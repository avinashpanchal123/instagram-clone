const app = require("./app");
const connect = require("./configs/db");


app.listen(3005, async ()=>{
    await connect();
    console.log("listening to port 3005");
})