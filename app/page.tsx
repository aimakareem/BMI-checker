import link from "next/link";   
import Image from "next/image";
import LandingCard from "../components/LandingCard";    
export default function Homepage() {
return(
    <div className="relative h-screen">
        <Image
            src="/assets/sage-bg.jpg"
            alt="Healthy Food Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
        />
        <LandingCard />
    
    </div>
)
}