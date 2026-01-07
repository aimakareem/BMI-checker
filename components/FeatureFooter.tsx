import Link from "next/link";
import React from "react";

export default function FeatureFooter() {
    return (
        <footer className="w-full bg-[#F0F4EF] rounded-2xl py-10 mt-4 flex justify-center shadow-lg">
            <div className="text-center max-w-2xl px-6">
                <p className="text-gray-700 text-xl font-serif mb-2">
                    Long-term wellness, one gentle step at a time.
                </p>   
                <p className="text-gray-600 font-serif mb-6">
                    Begin your journey today with our compassionate tools designed for real bodies and real lives.
                </p>
                <Link href="/">
                    <button className="px-8 py-2 bg-[#8CA68C] text-white rounded-full font-serif hover:bg-[#7A966E] hover:scale-105 transition-all duration-300">
                        Start Now
                    </button>
                </Link>
                <p className="text-gray-400 italic text-sm mt-4">
                    "You are not a number. You're a human."
                </p>
            </div>
        </footer>
    );
}

