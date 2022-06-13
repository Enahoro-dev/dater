import React from 'react';

import ConvertEdd from './ConvertEdd.js';
import ConvertGa from './ConvertGa.js';

const Popup = (props) => {
let popupString = props.popup? 'h-0 transition-all ' : 'h-3/5 transition-all duration-400 ease-in-out'

return (
        <div className={`text-green bottom-0 fixed text-lg font-bold bg-white z-10 w-full rounded-t-3xl ${popupString}` }>
            <div className='w-1/5 border-t border-green mx-auto border-4 mt-2'></div>
            <h2 className='text-green flex flex-col items-center mt-4 text-xl'>RESULTS</h2>
            <div className='flex flex-col items-start mt-6 ml-12'>
                <ul className='list-disc text-green'>
                    <li><ConvertEdd date={props.date}/></li>
                    <li><ConvertGa date={props.date}/></li>
                </ul>     
            </div>
            <div className='flex flex-col items-center'>
                <button className='mt-24 absolute text-xl bg-green rounded-full text-white w-3/4 h-12' onClick={() => props.setPopup(!props.popup)}> Cancel</button>
            </div>
                
        </div>
    
)

}

export default Popup