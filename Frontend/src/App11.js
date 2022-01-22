
import React from "react"

import Navbar from "./components/Navbar"
import Post from "./components/posts/Post"

const App = ()=>{
 
    return (
        <div className="app">
          <Navbar/>
          <div>
            <Post/>
            </div>
        </div>
        
    )
}

export default App