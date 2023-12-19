import React, { useRef } from "react";

function BounceScreen() {
  const screenRef = useRef(null);
  return (
    <div ref={screenRef} className="screen">
      BounceScreen
    </div>
  );
}

export default BounceScreen;
