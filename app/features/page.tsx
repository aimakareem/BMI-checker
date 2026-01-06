import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection"; 
import AboutPageCard from "@/components/AboutPageCard";
import { FaAppleAlt } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { PiFlowerTulipDuotone } from "react-icons/pi";
export default function FeaturesPage() {
    return(
        <div className="relative min-h-screen pt-16">
            <Image
                        src="/assets/gray-bg.jpg"
                        alt="Healthy Food Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
            <div className="relative z-10 flex flex-col min-h-full">
                <HeroSection 
                            
                            tagline="GENTLE GUIDANCE FOR REAL BODIES"
                            title="Long-term wellness,"
                            titleHighlight="one gentle step at a time."
                            subtitle="Discover wholesome tools designed to support your unique journey to health."
                            position="top"
                />   
                
                <div className="flex-1 p-4 pb-16 md:pb-24 lg:pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        <AboutPageCard
                            icon={ FaAppleAlt }
                            title="Calorie Checker"
                            description="In a world full of diet noise, we believe in finding peace through understanding. Health isn't about punishment or perfection—it's about gentle guidance and self-compassion on your journey"
                            color="text-red-500 font-bold"
                        />
                        <AboutPageCard
                            icon={ FaBowlFood } 
                            title="Nutrition Guidance"
                            description="We provide tools to understand your body without judgment. From BMI tracking to nutrition guidance, everything is designed to support your unique path to wellness, not compare you to others"
                            color="text-orange-500"
                        />
                        <AboutPageCard
                            icon={ GiThreeLeaves }
                            title="Healthy Recipes"
                            description="Every body is different. Our approach celebrates this diversity and helps you discover what works for YOU—not what trends demand or society expects. Your journey, your pace, your choices."
                            color="text-green-600"
                        />
                
                    </div>
                </div>
            </div>
        </div>
    )

    
}





        