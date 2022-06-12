import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Popup from './Popup';
import 'react-datepicker/dist/react-datepicker.css';

const Dater = (props) => {
    const [date, setDate] = useState('');
    
    let dateMin =new Date()
    dateMin.setMonth(dateMin.getMonth() -10);
    let minDate= dateMin

    let dateMax =new Date()
    dateMax.setDate(dateMax.getDate() -1)
    let maxDate=dateMax

        
    let submitting = true
    if (date){
        submitting=false
    }

    return(
        <div>
            <div className='flex flex-col justify-center items-center'>
                <label className='text-green mb-2 text-base font-bold'>LAST MENSTRUAL PERIOD</label>
                <DatePicker className='date-picker text-black ' selected={date} onSelect={setDate} minDate={minDate} maxDate={maxDate}/>
                <button disabled ={submitting} className=' mt-4 z-10 text-lg bg-green text-white w-2/5 h-8 font-normal' onClick={() =>  props.changePopup(!props.popup)}>Calculate</button>
            </div>
            <Popup date={date} popup={props.popup} setPopup={props.setPopup}/>
        </div>
    )



}

export default Dater

