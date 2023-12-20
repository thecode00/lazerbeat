import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Test() {
  const testRef = useRef(null);
  const testElement = testRef.current;

  useGSAP(() => {
    if (!testElement) {
      return;
    }
    gsap.to(testElement, { x: 100 });
  });

  return (
    <div ref={testRef} d>
      Test
    </div>
  );
}

export default Test;
