import React from 'react';
import Header from './Header.js';
import Clb from './Clb.js';
import Footer from './Footer.js';


const App = () => {
    return(
        <div className='font-mono'>
            <div className=' mt-12'>
                <Header/>
            </div>
            <div className='flex flex-col  mt-4 font-mono'>
                <Clb/>
            </div>
            <div className='footer bottom-2 absolute  text-white'>
                <Footer/>
            </div>
        </div>
        
        
    )
}

export default App