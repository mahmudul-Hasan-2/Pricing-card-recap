import React from 'react';
import { Features } from 'tailwindcss';
import Feature from '../Feature/Feature';
import Limitations from '../Limitations/Limitations';
const Card = ({ pricing }) => {
    const { features, limitations } = pricing;
    return (
        <div className='bg-gradient-to-br from-gray-800/50 via-gray-900/80 to-black/50 p-8 sm:p-10 text-start rounded-2xl space-y-5 duration-1000 hover:-translate-y-3 min-h-[400px]'>
            <div className='flex items-center justify-between'>
                <h2><span className='text-2xl'>{pricing.name}</span></h2>

                <p className='flex items-center gap-2'><span className='text-white font-medium'>${pricing.price}</span> {pricing.price === 0 && (<div className="badge text-white p-1 px-4 rounded-full bg-green-600 ">Free</div>)}</p>
            </div>

            {
                pricing.isPopular && <div class="badge badge-error bg-red-700 text-white rounded-full text-center w-full sm:w-[42%] py-1">Most Popular</div>
            }
            <div className='flex items-center justify-between'>
                <p>{pricing.desc}</p>
            </div>


            <div>
                <h2>Feature</h2>

                <div>
                    {
                        features.map(feature => <Feature feature={feature}></Feature>)
                    }
                </div>
            </div>

            <div>
                <h2>Limitations</h2>

                {
                    limitations.map(limitation => <Limitations limitation={limitation}></Limitations>)
                }
            </div>

            <div className='flex items-end'>
                <button className='btn btn-primary duration-1000 hover:bg-blue-800'>{pricing.btn}</button>
            </div>
        </div>
    );
};

export default Card;