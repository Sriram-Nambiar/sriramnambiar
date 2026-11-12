"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RandomAni() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".box", {
        x: 300,
        repeat: -1,
        duration: 10,
        yoyo: true,
        
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="box">hey</div>
    </div>
  );
}