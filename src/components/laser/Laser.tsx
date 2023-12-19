import React, { useEffect, useRef } from "react";

function Laser() {
  const laserRef = useRef<HTMLDivElement>(null);

  const deleteLaserHandler = () => {
    console.log("Delete");
  };
  return (
    <div
      onClick={deleteLaserHandler}
      ref={laserRef}
      style={{ color: "white", width: 8, height: 8, borderRadius: 360 }}
    ></div>
  );
}

export default Laser;
