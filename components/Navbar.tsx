import Link from "next/link";   
import React from "react";
import Image from "next/image";

export default function Navbar() {
    return(
        <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-green-600 text-2xl font-bold flex items-center gap-2">
                    <span>
                        <Image src="/assets/logo.png"
                        alt="Logo" width={60} height={60} />
                    </span>
                    <Link href="/">BMI Calculator</Link>
                </div>
                
                {/* Navigation Links */}
                <div className="flex gap-8">
                    <Link 
                        href="/" 
                        className="text-gray-800 hover:text-green-600  hover:underline font-bold transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/calculator" 
                        className="text-gray-800  hover:text-green-600 hover:underline font-bold transition-colors duration-200"
                    >
                        Calculator
                    </Link>
                    <Link 
                        href="/about" 
                        className="text-gray-800 hover:text-green-600  hover:underline font-bold transition-colors duration-200"
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    )
}