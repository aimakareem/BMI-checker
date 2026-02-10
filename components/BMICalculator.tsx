"use client";

import React, { useState } from "react";
import { FaWeight, FaRulerVertical } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineMonitorWeight } from "react-icons/md";
import BMIResult from "./BMIResult";


interface BMIResult {
    bmi: number;
    category: string;
    color: string;
    description: string;
}

export default function BMICalculator() {
const [unit, setUnit] = useState<"metric" | "imperial">("metric");
const [age, setAge] = useState<string>("");
const [gender, setGender] = useState<string>("");
const [height, setHeight] = useState<string>("");
const [weight, setWeight] = useState<string>("");
const [result, setResult] = useState<BMIResult | null>(null);

const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!heightNum || !weightNum || !age || !gender) {
    alert("Please fill in all fields!");
    return;
    }

    let bmi: number;

    if (unit === "metric") {
      // Convert height from cm to meters
    const heightInMeters = heightNum / 100;
      bmi = weightNum / (heightInMeters * heightInMeters);
    } else {
      // Imperial formula: (weight in lbs / (height in inches)²) × 703
      bmi = (weightNum / (heightNum * heightNum)) * 703;
    }

    let category = "";
    let color = "";
    let description = "";

    if (bmi < 18.5) {
    category = "Underweight";
    color = "text-blue-400";
    description =
        "You may need to gain weight. Consider consulting a healthcare provider for personalized advice.";
    } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal Weight";
    color = "text-green-500";
    description =
        "Great! You have a healthy weight. Maintain it with a balanced diet and regular exercise.";
    } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    color = "text-orange-400";
    description =
        "You may want to lose some weight. Focus on healthy eating and increasing physical activity.";
    } else {
    category = "Obese";
    color = "text-red-500";
    description =
        "Consider consulting a healthcare provider for guidance on weight management and healthy lifestyle changes.";
    }

    setResult({ bmi, category, color, description });
};

const resetCalculator = () => {
    setAge("");
    setGender("");
    setHeight("");
    setWeight("");
    setResult(null);
};

return (
    <div className="flex-1 p-4 pb-8 md:pb-16">
        <div className="container mx-auto max-w-4xl">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-sage-300 border-opacity-20 shadow-2xl">
          {/* Unit Toggle */}
        <div className="flex gap-3 mb-8">
            <button
            type="button"
            onClick={() => setUnit("metric")}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                unit === "metric"
                ? "bg-sage-500 text-white shadow-lg transform scale-105"
                : "bg-white bg-opacity-5 text-gray-400 hover:bg-white hover:bg-opacity-10 border border-sage-300 border-opacity-20"
            }`}
            >
            Metric (kg/cm)
            </button>
            <button
            type="button"
            onClick={() => setUnit("imperial")}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                unit === "imperial"
                ? "bg-sage-500 text-white shadow-lg transform scale-105"
                : "bg-white bg-opacity-5 text-gray-400 hover:bg-white hover:bg-opacity-10 border border-sage-300 border-opacity-20"
            }`}
            >
            Imperial (lb/in)
            </button>
        </div>

        <form onSubmit={calculateBMI} className="space-y-6">
            {/* Age and Gender Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Age Input */}
            <div>
                <label className="flex items-center gap-2 text-sage-300 font-semibold mb-3 text-sm md:text-base">
                <IoMdPerson className="text-xl" />
                Age (years)
                </label>
                <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min="2"
                max="120"
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-white bg-opacity-5 border-2 border-sage-300 border-opacity-30 text-black placeholder-gray-500 focus:border-sage-500 focus:outline-none transition-all duration-300 text-base md:text-lg"
                placeholder="Enter your age"
                required
                />
            </div>

              {/* Gender Select */}
            <div>
                <label className="flex items-center gap-2 text-sage-300 font-semibold mb-3 text-sm md:text-base">
                <IoMdPerson className="text-xl" />
                Gender
                </label>
                <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-white bg-opacity-5 border-2 border-sage-300 border-opacity-30 text-black focus:border-sage-500 focus:outline-none transition-all duration-300 text-base md:text-lg"
                required
                >
                <option value="" className="text-white bg-gray-800">
                    Select Gender
                </option>
                <option value="male" className="text-white bg-gray-800">
                    Male
                </option>
                <option value="female" className="text-white bg-gray-800">
                    Female
                </option>
                </select>
            </div>
            </div>

            {/* Height and Weight Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Height Input */}
            <div>
                <label className="flex items-center gap-2 text-sage-300 font-semibold mb-3 text-sm md:text-base">
                <FaRulerVertical className="text-xl" />
                Height ({unit === "metric" ? "cm" : "inches"})
                </label>
                <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                step="0.1"
                min="1"
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-white bg-opacity-5 border-2 border-sage-300 border-opacity-30 text-black placeholder-gray-500 focus:border-sage-500 focus:outline-none transition-all duration-300 text-base md:text-lg"
                placeholder={unit === "metric" ? "e.g., 170" : "e.g., 67"}
                required
                />
            </div>

              {/* Weight Input */}
            <div>
                <label className="flex items-center gap-2 text-sage-300 font-semibold mb-3 text-sm md:text-base">
                <FaWeight className="text-xl" />
                Weight ({unit === "metric" ? "kg" : "lbs"})
                </label>
                <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                step="0.1"
                min="1"
                className="w-full px-4 py-3 md:py-4 rounded-xl bg-white bg-opacity-5 border-2 border-sage-300 border-opacity-30 text-black placeholder-gray-500 focus:border-sage-500 focus:outline-none transition-all duration-300 text-base md:text-lg"
                placeholder={unit === "metric" ? "e.g., 70" : "e.g., 154"}
                required
                />
            </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
            <button
                type="submit"
                className="flex-1 py-4 bg-sage-500 text-white rounded-xl font-bold text-lg hover:bg-sage-600 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
                <MdOutlineMonitorWeight className="text-2xl" />
                Calculate BMI
            </button>
            <button
                type="button"
                onClick={resetCalculator}
                className="px-8 py-4 bg-white bg-opacity-5 text-gray-300 rounded-xl font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 border border-sage-300 border-opacity-20"
            >
                Reset
            </button>
            </div>
        </form>

          {/* Result Display */}
        {result && (
            <div className="mt-8 p-6 md:p-8 bg-white bg-opacity-5 rounded-2xl border-2 border-sage-500 border-opacity-30 animate-fadeIn">
            <div className="text-center">
                <p className="text-sage-300 text-sm md:text-base mb-2">
                Your BMI Score
                </p>
                <div className={`text-5xl md:text-7xl font-bold mb-4 ${result.color}`}>
                {result.bmi.toFixed(1)}
                </div>
                <div className={`text-2xl md:text-3xl font-bold mb-4 ${result.color}`}>
                {result.category}
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                {result.description}
                </p>
            </div>

            <BMIResult/>
            </div>
        )}
        </div>
    </div>
    </div>
); 
}