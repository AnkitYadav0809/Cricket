import React, { useState } from "react";
import data from './data.js';
import Players from "./Component/Players.js";
const App = () => {
  const [players, setPlayers] = useState(data);
  
   return (
    <div className="app">
           <Players players={players}></Players>  
    </div>
  )

};

export default App;