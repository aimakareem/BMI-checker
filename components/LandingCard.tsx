import link from "next/link";   
import Image from "next/image"; 
import React from "react";   
import Link from "next/link";   
export default function LandingCard() {
return(
    <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-center items-center p-4  bg-opacity-75 rounded-lg text-center">
            <p className="text-sage-500 font-light mb-4">Health,without the noise</p>
            <h3 className=" text-2xl text-olive-green font-bold font-serif">GENTLE GUIDANCE FOR
                <span className="text-cyan-950 block"> Real Bodies</span>
            </h3>
            <p className="text-sage-500 font-light mt-4">Understand your body,not judge it.</p>
            <Link href="/">
                <button className="mt-6 px-6 py-2 bg-olive-green text-white rounded-full hover:bg-green-900 hover:scale-105 transition-all duration-300 font-serif">
                    Start your journey
                </button>
            </Link>
        </div>
    </main>
)
}