import { CircleX } from 'lucide-react';
import React from 'react';

const Limitations = ({ limitation }) => {
    return (
        <div>
            <div className='flex items-center gap-2'>
                <CircleX size={18} className='text-red-800'></CircleX>
                <p>{limitation}</p>
            </div>
        </div>
    );
};

export default Limitations;