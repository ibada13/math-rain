'use client';
import { useEffect } from "react";
import gsap from "gsap";
export default function Game() { 

    useEffect(() => { 
        const rains = document.querySelectorAll("#rains")
        gsap.fromTo(rains, {
            y:0,
       }, {
            y: window.innerHeight,
            duration: 10,
           
        })
    },[])

    return (
        <div className="h-screen w-screen flex items-start justify-around   ">
            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            <div id="rains" className="bg-blue-500 rounded-md p-2 m-2">rains</div>
            <div className="self-end w-full ">hello there hahaha im in danger</div>
        </div>
    )
} 