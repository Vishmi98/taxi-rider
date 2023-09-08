'use client'

import React, { useState } from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
import Cars from './Cars';
import Cards from './Cards';
import { useRouter } from 'next/navigation';

function Booking() {
    const screenHeight = window.innerHeight * 0.72;
    const [amount, setAmount] = useState();
    const router:any = useRouter();
    return (
        <div className='p-5'>
            <h2 className='text-[20px] font-semibold'>
                Booking
            </h2>
            <div className='border-[1px] p-5 rounded-md' style={{ height: screenHeight }}>
                <AutoCompleteAddress />
                <Cars onCarSelectAmount={(amount:any) => setAmount(amount)}/>
                <Cards/>
                <button className={`w-full bg-blue-400 p-1 rounded-md mt-4
                ${!amount? 'bg-gray-200':null}`}
                onClick={() => router.push('/payment')}>
                    Book
                </button>
            </div>
        </div>
    )
}

export default Booking