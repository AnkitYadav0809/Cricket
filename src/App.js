import React, { useState } from "react";
import data from './data.js';
import Tours from './Component/Tours.js';

const App = () => {
  const [tours, setTours] = useState(data);
  
  

  return (
    <div className="app">
      <Tours tours={tours}  />
    </div>
  )

};

export default App;