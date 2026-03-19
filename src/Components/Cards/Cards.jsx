import React from 'react';
import Card from '../Card/Card';

const Cards = ({ pricingData }) => {
    console.log(pricingData);
    return (
        <div>
            <div className='my-5'>
                <h2>Get the Best Hosting Here</h2>
                <div className='flex items-center justify-center'>
                    <p className='max-w-xl'>Experience high-performance hosting with top-level security, seamless scalability, and 24/7 support for your growing online presence.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-5 max-w-3xl mx-auto'>
                {
                    pricingData.map(pricing => <Card pricing={pricing}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;