import { Messanger } from "./MainChat/Messanger/ChatMessanger"

import "./App.css"
import { ProfilePage } from "./ProfilePage/ProfilePage"


const App = ()=>{
 

    return (
        <div>
            <div className="fakeNavebar">Navbar</div>

              <ProfilePage/>
           
        </div>
        
    )
}

export default App