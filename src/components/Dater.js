import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import Popup from './Popup';
import 'react-datepicker/dist/react-datepicker.css';

const Dater = ({popup, setPopup}) => {
    const [date, setDate] = useState('');
    const buttonRef = useRef()

    let forMinDate =new Date()
    let minDate = forMinDate.setMonth(forMinDate.getMonth() -10);
    
    let forMaxDate =new Date()
    let maxDate= forMaxDate.setDate(forMaxDate.getDate() -1)
    //last menstrual period is to fall between ten months prior and the previous day
   
    let disabled = true
    if (date){
        disabled=false
    }
    //this causes the calculate button to be disabled if the date input field is blank

    return(
        <div>
            <div className='flex flex-col justify-center items-center'>
                <label className='text-green mb-2 text-sm font-bold'>Last Menstrual Period</label>
                <div className='date-picker flex justify-center items-center  text-black'><DatePicker selected={date} onSelect={setDate} minDate={minDate} maxDate={maxDate}/></div>
                <button ref={buttonRef} disabled ={disabled} className=' mt-2 z-10 text-sm bg-green rounded text-white w-1/4 h-8 font-normal md:w-32' onClick={() =>  setPopup(true)}>Calculate</button>
            </div>
            <Popup date={date} popup={popup} setPopup={setPopup} buttonRef={buttonRef}/>
        </div>
    )



}

export default Dater

