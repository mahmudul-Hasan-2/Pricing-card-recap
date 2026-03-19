import { CircleCheck } from 'lucide-react';
import React from 'react';

const Feature = ({ feature }) => {
    console.log(feature);

    return (
        <div>
            <div className="flex items-center gap-2 py-1">
                <CircleCheck className="text-green-500" size={18} />
                <span className="text-gray-300">{feature}</span>
            </div>
        </div>
    );
};

export default Feature;