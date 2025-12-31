"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
return(
    <nav className="fixed top-0 left-0 w-full bg-sage-600 text-white z-50">
        <div className="container mx-auto flex items-center">
            <ul className="hidden md:flex flex-1 justify-center space-x-8">
                <li>
                    <Link href="/" className="text-white hover:text-green-600 hover:underline font-serif ">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="text-white hover:text-green-600 hover:underline font-serif">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white hover:text-green-600 hover:underline font-serif">BMI checker</Link>
                </li>
                <li>
                    <Link href="/contact" className="text-white hover:text-green-600 hover:underline font-serif">Features</Link>
                </li>
            </ul>
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <span className="text-black font-bold text-xl"></span> // Close icon
                ) : (
                  <IoMenu className="h-8 w-8 text-white" /> // Hamburger icon
                )}
                </button>
            </div>
            {/* mobile menu */}
            {isOpen && (
                <ul className="flex flex-col space-y-2 mt-2 bg-sage-500 p-4 md:hidden">
                    <li>
                        <Link href="/" className="text-white font-serif hover:text-green-600">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white font-serif hover:text-green-600">Calculator</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white font-serif hover:text-green-600">About</Link>
                    </li>
        </ul>
            )}
        </div>
    </nav>
)
};