import React, { useEffect, useLayoutEffect, useRef } from "react";
import classes from "./SoundBlock.module.css";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

function SoundBlock() {
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blockElement = blockRef.current;

    if (!blockElement) return;
    // 블록을 드래그 할수있게 만듬
    gsap.registerPlugin(Draggable);
    Draggable.create(blockElement, { bounds: ".App" });

    gsap.set(blockElement, { opacity: 1, scale: 1 });

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
