'use client';
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Game(): JSX.Element {
  
  const [rainsArray, setRainsArray] = useState<JSX.Element[]>([]);

  
  const animateNewRains = (newRains: Element[]): void => {
    gsap.to(newRains, {
      y: window.innerHeight,
      duration: 10, 
      ease: "linear",
    });
  };

  
  const addRains = (count: number): void => {
    const newRainDivs: JSX.Element[] = [];
    const currentCount = rainsArray.length;

    for (let i = 0; i < count; i++) {
      newRainDivs.push(
          <div
          key={i}
          id="rains"
          className="absolute bg-blue-500 rounded-md p-2 m-10"
          style={{
            top: `-10vh`, 
            left: `${Math.random() * 80}vw`, 
          }}>
          rains {currentCount + i + 1}
        </div>
      );
    }

    
    setRainsArray((prevRains) => {
      const updatedRains = [...prevRains, ...newRainDivs];
      setTimeout(() => {
        const newRainsElements = document.querySelectorAll("#rains"); 
        const newRains = Array.from(newRainsElements).slice(currentCount); 
        animateNewRains(newRains); 
      }, 0);
      return updatedRains;
    });
  };

  useEffect(() => {

    addRains(2);

    const intervalId = setInterval(() => {
      addRains(1);
    }, 5000);

   
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-pink-500 h-screen w-screen flex flex-col justify-between">
      <div className="flex-grow relative items-start justify-around">
        
        {rainsArray}
      </div>

      <div className="p-2 bg-red-500 flex justify-center items-center">
        <p className="text-2xl">hello there hahaha im in danger</p>
      </div>
    </div>
  );
}
