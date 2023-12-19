import React, { useEffect, useLayoutEffect, useRef } from "react";
import classes from "./SoundBlock.module.css";

function SoundBlock() {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blockElement = blockRef.current;

    if (!blockElement) return;

    // blockElement.addEventListener("mouseenter", () => {
    //   gsap.to(blockElement, {
    //     x: () => blockElement.getBoundingClientRect().x + 5,
    //     repeat: 1, // 무한 반복
    //     yoyo: true, // 왕복 애니메이션
    //     duration: 0.05, // 각각의 흔들림이 얼마나 길어질지 설정
    //   });
    // });

    // blockElement.addEventListener("mouseleave", () => {
    //   // 애니메이션 멈춤
    //   gsap.killTweensOf(blockElement);
    // });
  }, []);

  return (
    <div className={classes.block} ref={blockRef}>
      SoundBlock
    </div>
  );
}

export default SoundBlock;
