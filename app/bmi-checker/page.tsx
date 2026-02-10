import Image from "next/image";
import Link from "next/link";
import { FiInfo } from "react-icons/fi";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import BMICalculator from "@/components/BMICalculator";

export default function BMICheckerPage() {
return (
    <div className="relative min-h-screen pt-16">
    <Image
        src="/assets/gray-bg.jpg"
        alt="Healthy Food Background"
        fill
        style={{ objectFit: "cover" }}
        priority
    />
    
    <div className="relative z-10 flex flex-col min-h-full">
        <HeroSection
        tagline="BMI CALCULATOR"
        title="Know Your Body"
        titleHighlight="Mass Index"
        subtitle="Calculate your BMI and understand your health status with our easy-to-use calculator."
        showButton={false}
        position="top"
        />

        <BMICalculator />

        {/* Learn More Button */}
        <div className="container mx-auto px-4 pb-16 text-center">
        <Link href="/bmi-info">
            <button className="bg-gradient-to-r from-sage-400 to-sage-600 hover:from-sage-500 hover:to-sage-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 mx-auto text-lg">
            <FiInfo className="text-2xl" />
            Learn More About BMI
            </button>
        </Link>
        </div>
    </div>
    
    
    </div>
);
}