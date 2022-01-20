import { Messanger } from "./Messanger/ChatMessanger"
//import socketIO from "socket.io-client";

import "./App.css"
// const ENDPOINT = "http://localhost:4500/"
// const socket = socketIO(ENDPOINT , {transport:["websocket"]} )

const App = ()=>{
 
//     socket.on("connect" ,()=>{

//    })
    return (
        <div>
            <div className="fakeNavebar">Navbar</div>

        
           <Messanger/>
        </div>
        
    )
}

export default App