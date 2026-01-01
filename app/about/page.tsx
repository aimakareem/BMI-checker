import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection"; 
import AboutPageCard from "@/components/AboutPageCard";
import { LuBrain } from "react-icons/lu";
export default function AboutPage() {
    return(
        <div className="">
            <Image
                        src="/assets/gray-bg.jpg"
                        alt="Healthy Food Background"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
            <div className="relative z-10">
                <HeroSection 
                            tagline="GENTLE GUIDANCE FOR REAL BODIES"
                            title="Health,without"
                            titleHighlight=" the noise"
                            subtitle="Long-term wellness, one gentle step at a time"
                            position="top"
                />   
                
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <AboutPageCard
                            icon={ LuBrain }
                            title="Personalized Health"
                            description="Get tailored BMI insights and health recommendations based on your unique body composition and lifestyle."
                        />
                        <AboutPageCard
                            icon={ LuBrain }
                            title="Nutrition Guidance"
                            description="Access evidence-based nutrition advice that promotes sustainable healthy eating habits for long-term wellness."
                        />
                        <AboutPageCard
                            icon={LuBrain}
                            title="Fitness Support"
                            description="Receive personalized exercise recommendations that fit your fitness level and help you achieve your goals."
                        />
                
                    </div>
                </div>
            </div>
        </div>
    )

    
}





            // <div className="relative z-10 pt-16.........relative min-h-screen