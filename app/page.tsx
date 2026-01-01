import link from "next/link";   
import Image from "next/image";   
import HeroSection from "../components/HeroSection";
export default function Homepage() {
return(
    <div className="relative h-screen">
        <Image
            src="/assets/gray-bg.jpg"
            alt="Healthy Food Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
        />
        <HeroSection 
            tagline="Gentle guidance for real bodies"
            title="GENTLE GUIDANCE FOR"
            titleHighlight="Real Bodies"
            subtitle="Understand your body, not judge it."
            showButton={true}
        />
    
    </div>
)
}