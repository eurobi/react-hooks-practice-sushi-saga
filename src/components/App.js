import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
function App() {

  const [plates, setPlates] = useState([])
  return (
    <div className="app">
      <SushiContainer setPlates={setPlates} plates={plates} />
      <Table plates={plates} />
    </div>
  );
}

export default App;
