import React from "react";
import CounterApp from "./Components/couterApp";
import SongList from "./Components/SongList";
import SongDisplay from "./Components/songDisplay";
const App=()=>{

  return(
    <div>
<CounterApp />
<SongList />
<SongDisplay/>
    </div>
  )
}
export default App;