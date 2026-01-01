import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection"; 
import AboutPageCard from "@/components/AboutPageCard";
import { LuBrain } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { PiFlowerTulipDuotone } from "react-icons/pi";
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
                
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <AboutPageCard
                            icon={ LuBrain }
                            title="Our Philosophy"
                            description="In a world full of diet noise, we believe in finding peace through understanding. Health isn't about punishment or perfection—it's about gentle guidance and self-compassion on your journey"
                        />
                        <AboutPageCard
                            icon={ FaRegHeart }
                            title="Your Wellness"
                            description="We provide tools to understand your body without judgment. From BMI tracking to nutrition guidance, everything is designed to support your unique path to wellness, not compare you to others"
                        />
                        <AboutPageCard
                            icon={ PiFlowerTulipDuotone }
                            title="Real Bodies"
                            description="Every body is different. Our approach celebrates this diversity and helps you discover what works for YOU—not what trends demand or society expects. Your journey, your pace, your choices."
                        />
                
                    </div>
                </div>
            </div>
        </div>
    )

    
}





        