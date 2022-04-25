import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import ConvertEdd from './ConvertEdd.js';
import ConvertGa from './ConvertGa.js';

const Clb = () => {
    const [date, setDate] = useState('');
    let d=new Date()
    d.setMonth(d.getMonth() -10);
    let minDate= d

    return(
        <div>
            <div className='flex flex-col justify-center items-center'>
                <label className='text-white mb-1 text-sm'>LAST MENSTRUAL PERIOD</label>
                <DatePicker  minDate={minDate} maxDate={new Date()} onChange={setDate} value={date} className='date-picker'/>
            </div>
            <div  className='text-white ml-0 mt-8 text-sm flex flex-col items-center'>
                <div className='flex flex-col items-start'>
                    <ConvertEdd date={date}/>
                    <ConvertGa date={date}/>
                </div>
            </div>
        </div>
    )



}

export default Clb

