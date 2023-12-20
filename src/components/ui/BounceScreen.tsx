import React, { useRef, useState } from "react";
import Laser from "../laser/Laser";

function BounceScreen() {
  const screenRef = useRef(null);
  const [balls, setBalls] = useState([])

  const deleteBallHandler = (id: string) => {
    setBalls(prev => prev.filter(data => data.id !== id))
  }
  return (
    <div ref={screenRef} className="screen">
      {balls.map(ball => <Laser/>)}
    </div>
  );
}

export default BounceScreen;
