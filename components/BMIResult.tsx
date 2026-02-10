type Result = {
bmi: number;
category: string;
color: string;
description: string;
};

export default function BMIResult({ result }: { result: Result }) {
const active = (min: number, max?: number) =>
    result.bmi >= min && (max === undefined || result.bmi < max)
    ? "scale-110 font-bold"
    : "opacity-50";

return (
    <div className="mt-8 p-6 md:p-8 bg-white bg-opacity-5 rounded-2xl border-2 border-sage-500 border-opacity-30 animate-fadeIn">
    <div className="text-center">
        <p className="text-sage-300 text-sm md:text-base mb-2">Your BMI Score</p>
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

    <div className="mt-8">
        <div className="h-3 bg-gradient-to-r from-blue-400 via-green-500 to-orange-400 rounded-full mb-4"></div>
        <div className="grid grid-cols-4 text-center text-sm">
        <div className={`text-blue-400 ${active(0, 18.5)}`}>
            <div>&lt;18.5</div>
            <div className="text-gray-400 mt-1">Underweight</div>
        </div>

        <div className={`text-green-500 ${active(18.5, 25)}`}>
            <div className="font-bold">18.5 - 24.9</div>
            <div className="text-gray-400 mt-1">Normal</div>
        </div>

        <div className={`text-orange-400 ${active(25, 30)}`}>
            <div className="font-bold">25 - 29.9</div>
            <div className="text-gray-400 mt-1">Overweight</div>
        </div>

        <div className={`text-red-500 ${active(30)}`}>
            <div className="font-bold">≥ 30</div>
            <div className="text-gray-400 mt-1">Obese</div>
        </div>
        </div>
    </div>
    </div>
);
}
