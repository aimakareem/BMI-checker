import Link from "next/link";   
import React from "react";   

interface HeroSectionProps {
    tagline: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    showButton?: boolean;  // Optional - default false
    position?: "center" | "top"; // Optional - default center
}

export default function HeroSection({ 
    tagline, 
    title, 
    titleHighlight, 
    subtitle, 
    showButton = false,
    position = "center"
}: HeroSectionProps) {
    const positionClasses = position === "center" 
        ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        : "relative pt-20 pb-12";
    
    return(
        <main className={positionClasses}>
            <div className="flex flex-col justify-center items-center p-4 bg-opacity-75 rounded-lg text-center">
                <p className="text-sage-500 font-light  mb-4">{tagline}</p>
                <h3 className="text-5xl text-olive-green font-bold font-serif">
                    {title}
                    <span className="text-cyan-950 block">{titleHighlight}</span>
                </h3>
                <p className="text-sage-500 font-light mt-4">{subtitle}</p>
                
                {/* Button sirf Home Page pe show hoga */}
                {showButton && (
                    <Link href="/">
                        <button className="mt-6 px-6 py-2 bg-olive-green text-white rounded-full hover:bg-green-900 hover:scale-105 transition-all duration-300 font-serif">
                            Start your journey
                        </button>
                    </Link>
                )}
            </div>
        </main>
    )
}
