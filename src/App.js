import React, { useState } from "react";
import data from './data.js';
//import Playersrs from './Component/Players.js';
import Players from "./Component/Players.js";

const App = () => {
  const [tours, setTours] = useState(data);
  
  

  return (
    <div className="app">
      <Players tours={tours}  />
    </div>
  )

};

export default App;