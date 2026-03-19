import React from 'react';

const Card = ({ pricing }) => {
    return (
        <div className='bg-linear-to-r from-[#00000036] via-[#333] p-5 text-center rounded-2xl'>
            <h2>{pricing.name}</h2>
            
        </div>
    );
};

export default Card;