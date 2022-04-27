import React from 'react';
import clbImage from '../assets/clb.jpg';

const Header = () => {
    return(
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-lg text-white mb-2 tracking-wide font-bold'>CALCULER LE BÉBÉ</h1>
            </div>
            <div>
                <img src={clbImage} alt='clb'/>
            </div>
        </div>
    )
}

export default Header