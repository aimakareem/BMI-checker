import link from "next/link";   
import Image from "next/image"; 
export default function Footer() {
return(
    <footer className="fixed bottom-0 left-0 w-full bg-sage-600">
        <div className="container mx-auto text-center font-serif p-4 border-t mt-8">
            <p>"You're not a number. You're a human."</p>
        </div>
    </footer>
)
}