import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Laser() {
  const laserRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const laserElement = laserRef.current;
    if (!laserElement) return;

    gsap.set(laserElement, { x: 0, y: 300 });
    gsap.to(laserElement, {
      x: () => laserElement.getBoundingClientRect().x + 500,
      duration: 1,
      repeat: 3,
    });
  });
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
