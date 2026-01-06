import React from "react";
import { IconType } from "react-icons";

    interface AboutPageCardProps {
        icon: IconType;
        title: string;
        description: string;
        color?: string;
    }
    export default function AboutPageCard({ icon: Icon, title, description, color = "text-olive-green" }: AboutPageCardProps) {
        return(
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center h-full">
                <div className="mb-2 md:mb-4 bg-sage-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
                    <Icon size={24} className={`${color}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{description}</p>
            </div>
        )
    }