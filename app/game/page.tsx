'use client';
import { useEffect } from "react";
import gsap from "gsap";
export default function Game() { 

    useEffect(() => { 
        const rains = document.querySelectorAll("#rains")
        const targetdiv = document.getElementById("target") as HTMLDivElement
        const targetY = targetdiv.getBoundingClientRect().top
        console.log(targetY)
        gsap.fromTo(rains, {
            y:0,
       }, {
            y: targetY -100   ,
            duration: 10,
           
        })
    },[])

    return (
        <div className="bg-pink-500 h-screen w-screen flex flex-col justify-between    ">
            <div className="flex-grow flex items-start justify-around">

            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            </div>
            <div>
                
                <div id="target" className="p-2 bg-red-500 flex justify-center items-center">
                    <p className="text-2xl">
                    hello there hahaha im in danger
                    </p>
                </div>
            </div>
        </div>
    )
} 