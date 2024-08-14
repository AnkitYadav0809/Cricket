import React, { useState } from "react";
import data from './data.js';
//import Playersrs from './Component/Players.js';
import Players from "./Component/Players.js";

const App = () => {
  const [players, setPlayers] = useState(data);
  
  

  return (
    <div className="app">
      <Players players={players}  />
    </div>
  )

};

export default App;