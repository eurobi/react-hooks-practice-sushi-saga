import React, { useState } from "react";

function Sushi({setPlates, plates, sushi}) {
  const [eaten, changeEaten] = useState(false)
  function handleClick(){
    console.log(100 - plates.reduce((plate1, plate2) => plate1 + plate2, 0) - sushi.price)
    if(100 - plates.reduce((plate1, plate2) => plate1 + plate2, 0) - sushi.price > 0){
      changeEaten(true)
      setPlates([...plates,sushi.price])
      console.log(plates)
    }
    
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
