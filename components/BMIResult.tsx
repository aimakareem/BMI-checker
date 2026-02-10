    
    
    export default function BMIResult({ bmi }: { bmi: number }) {
        let category = "";
        let colorClass = ""; 
        return (           
    
            <div className="mt-8">
                <div className="h-4 bg-gradient-to-r from-blue-400 via-green-500 to-orange-400 rounded-full mb-4"></div>
                <div className="grid grid-cols-4 text-center text-xs md:text-sm">
                <div className="text-blue-400">
                    <div className="font-bold">&lt; 18.5</div>
                    <div className="text-gray-400 mt-1">Underweight</div>
                </div>
                <div className="text-green-500">
                    <div className="font-bold">18.5 - 24.9</div>
                    <div className="text-gray-400 mt-1">Normal</div>
                </div>
                <div className="text-orange-400">
                    <div className="font-bold">25 - 29.9</div>
                    <div className="text-gray-400 mt-1">Overweight</div>
                </div>
                <div className="text-red-500">
                    <div className="font-bold">≥ 30</div>
                    <div className="text-gray-400 mt-1">Obese</div>
                </div>
                </div>
            </div>
        );
    }