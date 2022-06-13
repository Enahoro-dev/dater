import React from 'react';
import crib from '../assets/crib.png';

const Header = () => {
    return(
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-2xl text-green mb-6 tracking-wide font-bold '>DATER</h1>
            </div>
            <div className='w-3/4'>
                <img src={crib}alt='crib'/>
            </div>
        </div>
    )
}

export default Header