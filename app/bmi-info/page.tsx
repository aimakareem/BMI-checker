import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import HeroSection from "@/components/HeroSection";

export default function BMIInfoPage() {
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
          tagline="BMI INFORMATION"
          title="Everything About"
          titleHighlight="Body Mass Index"
          subtitle="Learn what BMI means, why it matters, and how to interpret your results."
          showButton={false}
          position="top"
        />

        {/* BMI Info Content */}
        <div className="flex-1 p-4 pb-16 md:pb-24 lg:pb-32">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-sage-300/30 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-sage-700">
                Understanding Your BMI
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-600 mb-3">
                    What is BMI?
                  </h4>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Body Mass Index (BMI) is a simple calculation using a person's height and weight. 
                    The formula is BMI = kg/m² where kg is a person's weight in kilograms and m² is their height in metres squared.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h4 className="text-lg font-bold text-green-600 mb-3">
                    Why Track BMI?
                  </h4>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    BMI is a useful indicator of healthy body weight. It helps identify whether you're at a healthy weight, 
                    underweight, overweight, or obese, which can affect your overall health.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <h4 className="text-lg font-bold text-orange-600 mb-3">
                    BMI Limitations
                  </h4>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    BMI doesn't directly measure body fat or muscle mass. Athletes with high muscle mass may have a high BMI 
                    but low body fat. Always consult healthcare professionals for comprehensive health assessment.
                  </p>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                  <h4 className="text-lg font-bold text-pink-600 mb-3">
                    Next Steps
                  </h4>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Use your BMI as a starting point for health conversations. Combine it with other health indicators 
                    like waist circumference, diet quality, and physical activity levels for a complete picture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 pb-16 text-center">
          <Link href="/bmi-checker">
            <button className="bg-sage-500 hover:bg-sage-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mx-auto">
              <IoArrowBack className="text-xl" />
              Back to Calculator
            </button>
          </Link>
        </div>
      </div>
      
    
    </div>
  );
}
