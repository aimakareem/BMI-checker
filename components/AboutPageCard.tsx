import React from "react";
import { IconType } from "react-icons";

    interface AboutPageCardProps {
        icon: IconType;
        title: string;
        description: string;
    }
    export default function AboutPageCard({ icon: Icon, title, description }: AboutPageCardProps) {
        return(
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4">
                    <Icon size={48} className="text-sage-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        )
    }