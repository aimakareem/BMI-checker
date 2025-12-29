import link from "next/link";   
import Image from "next/image";

export default function Homepage() {
return(
    <div>
        <Image
            src="/assets/bg-2.jpg"
            alt="Healthy Food Background"
            fill
            // style={{ objectFit: 'cover' }}
            priority
        />
    </div>
)
}