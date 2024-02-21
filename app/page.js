"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [maskPosition, setMaskPosition] = useState("50% 50%");

    // custom Cursor
    const cursorSize = 15;
    const mouse = {
      x: useMotionValue(0),
      y: useMotionValue(0),
    };
    const [isHovered, setIsHovered] = useState(false); // State to track hover
  
    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
    const smoothMouse = {
      x: useSpring(mouse.x, smoothOptions),
      y: useSpring(mouse.y, smoothOptions),
    };
  
    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    };
  
    useEffect(() => {
      window.addEventListener("mousemove", manageMouseMove);
      return () => {
        window.removeEventListener("mousemove", manageMouseMove);
      };
    }, []);
    // 

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMaskPosition(`${x}% ${y}%`);
  };

  const handleMouseLeave = () => {
    setMaskPosition("50% 50%"); // Reset mask position
  };

  return (
    <main className="bg-black items-center w-screen justify-center flex h-screen">
      <div
        className="mask3 h-[800px] w-[800px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          "--mask-position": maskPosition, // Using a CSS variable for mask position
        }}
      >
        <img src="/7.jpg" className="h-[800px] w-[800px]" alt="pic" />
      </div>
    </main>
  );
  // return (
  //   <main className="bg-black items-center w-screen justify-center flex h-screen">
  //     <div className="mask3 h-[800px] w-[800px]">
  //       <img src="/7.jpg" className="h-[800px] w-[800px]" alt="pic" />
  //     </div>
  //   </main>
  // );
}
