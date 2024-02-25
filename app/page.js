"use client";
import React, { useEffect, useRef } from "react";

function getRandomHexCode() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

export default function Home() {
  const coverRef = useRef(null);

  const manageMouseMove = (e) => {
    if (!coverRef.current) return;
    const { clientX, clientY } = e;
    coverRef.current.style.setProperty("--x", `${clientX}px`);
    coverRef.current.style.setProperty("--y", `${clientY}px`);
  };

  const handleMouseEnter = () => {
    const randomColor = getRandomHexCode();
    coverRef.current.style.setProperty("--color", `${randomColor}`)
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    const randomColor = getRandomHexCode();
    coverRef.current.style.setProperty("--color", `${randomColor}`)
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={coverRef} className="cover bg-black items-center w-full h-screen flex justify-center">
        <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="text-8xl uppercase text-white">
          Gradients
        </h3>
      </div>
    </>
  );
}
