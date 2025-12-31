import link from "next/link";   
import Image from "next/image"; 
export default function Footer() {
return(
    <footer className="fixed bottom-0 left-0 w-full">
        <div className="w-full bg-sage-300/50 border-t">
            <div className="container mx-auto text-center  text-green-900 font-serif p-4 mt-4">
                <p>"You're not a number. You're a human."</p>
            </div>
        </div>
    </footer>
)
}