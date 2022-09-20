import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({setPlates, plates}) {
  const [sushiList, setSushiList] = useState([])
  const [lastIndex, setLastIndex] = useState(4)

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then(r => r.json())
    .then(sushi => setSushiList(sushi))
  },[])

  function handleClick(){
    setLastIndex(lastIndex + 4)

  }

  const filteredSushi = sushiList.filter((sushi) => sushi.id <= lastIndex && sushi.id > lastIndex - 4)

  return (
    <div className="belt">
      {filteredSushi.map((sushi) => <Sushi setPlates={setPlates} plates={plates} sushi={sushi} key={sushi.id}></Sushi>)}
      <MoreButton onClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
