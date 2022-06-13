import React, {useState, useEffect} from 'react';
import Header from './Header.js';
import Dater from './Dater.js';
import Footer from './Footer.js';
import ReactLoading from 'react-loading';

const App = () => {
    const [done, setDone] = useState(undefined)
    const [popup,setPopup] = useState('false')

    const blurString = popup? '':'overlay'

    useEffect(() =>{
        setTimeout(()=>{
            setDone(true)
        },5000)

    },[]) 

    return(
        <div>
             { !done ? (
            <div className='appLoader'>
                <ReactLoading type={'cylon'} color={'#2d8d79'} height={'50px'} width={'100px'} />
            </div>
        ) : (   
                <div className='font-sans fixed mt-0' >
                    <div className='relative'>
                    <div className={`absolute  w-screen h-screen top-0 left-0  ${blurString}`}></div>

                    <div className=' mt-4'>
                        <Header/>
                    </div>
                    <div className='flex flex-col  mt-6'>
                        <Dater popup={popup} setPopup={setPopup} changePopup={(popup) => setPopup(popup)} />
                    </div>
                    

                    <div className='footer bottom-6 fixed  text-white'>
                        <Footer/>
                    </div>
                    </div>
                </div>  
        )}
        </div>   
    )
}

export default App