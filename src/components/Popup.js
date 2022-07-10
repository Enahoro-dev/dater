import React,{useRef,useEffect} from 'react';
import ConvertEdd from './ConvertEdd.js';
import ConvertGa from './ConvertGa.js';

const Popup = ({popup, date, setPopup, buttonRef}) => {
let popupString = popup?  'h-1/2 transition-all duration-400 ease-in-out sm:block'  : 'h-0 transition-all sm:hidden'
//string to edit display of the popup based on the popup variable
const popupRef=useRef()
useEffect(() => {
    document.body.addEventListener('click',(e) => {
        if (popupRef.current.contains(e.target)){
            return
        }else if (buttonRef.current.contains(e.target)){
            return
        }
        setPopup(false)
    })
},[popupRef,setPopup,buttonRef])
//close popup if screen outside the popup is clicked

return (
        <div ref={popupRef} className={`popup text-green bottom-0 fixed text-lg font-bold bg-white z-10 w-full rounded-t-3xl sm:absolute sm:w-3/5 sm:h-5/6 sm:left-50 sm:top-80 sm:rounded-b-3xl md:w-1/2  lg:w-2/5 lg:h-full  ${popupString}` }>
            <div className='w-1/5 border-t border-green mx-auto border-4 mt-2'></div>
            <h2 className='text-green flex flex-col items-center mt-4 text-xl'>RESULTS</h2>
            <div className='flex flex-col items-start mt-4 ml-12'>
                <ul className='list-disc text-green'>
                    <li><ConvertEdd date={date}/></li>
                    <li><ConvertGa date={date}/></li>
                </ul>     
            </div>
            <div className='flex flex-col items-center'>
                <button className='mt-14 absolute text-xl bg-green rounded-full text-white w-3/4 h-12 sm:static sm:w-1/2 sm:mt-4' onClick={() => setPopup(!popup)}> Cancel</button>
            </div>
        </div>
    
)

}

export default Popup