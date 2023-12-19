import React, { useEffect, useRef } from "react";

function Laser() {
  const laserRef = useRef<HTMLDivElement>(null);

  const deleteLaserHandler = () => {
    console.log("Delete");
  };
  return (
    <div onClick={deleteLaserHandler} ref={laserRef} style={{ color: "white" }}>
      Laser
    </div>
  );
}

export default Laser;
