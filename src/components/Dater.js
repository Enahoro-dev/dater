import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Popup from './Popup';
import 'react-datepicker/dist/react-datepicker.css';

const Dater = (props) => {
    const [date, setDate] = useState('');
    
    let forMinDate =new Date()
    let minDate = forMinDate.setMonth(forMinDate.getMonth() -10);
    
    let forMaxDate =new Date()
    let maxDate= forMaxDate.setDate(forMaxDate.getDate() -1)
   
    let disabled = true
    if (date){
        disabled=false
    }

    return(
        <div>
            <div className='flex flex-col justify-center items-center'>
                <label className='text-green mb-2 text-sm font-bold'>Last Menstrual Period</label>
                <DatePicker className='date-picker text-black ' selected={date} onSelect={setDate} minDate={minDate} maxDate={maxDate}/>
                <button disabled ={disabled} className=' mt-2 z-10 text-sm bg-green rounded text-white w-1/4 h-8 font-normal' onClick={() =>  props.changePopup(!props.popup)}>Calculate</button>
            </div>
            <Popup date={date} popup={props.popup} setPopup={props.setPopup}/>
        </div>
    )



}

export default Dater

