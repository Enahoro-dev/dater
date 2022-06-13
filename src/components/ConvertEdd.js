import React, {useState, useEffect} from 'react';

const ConvertEdd = ({date}) => {
    const [edd, setEdd] = useState('')
    
    useEffect(() => {
        if (date) {
            const newMonth = (d, days) => {
                var nd = new Date(d.getTime());
                nd.setMonth(d.getMonth() + days);
                return nd;
            }
            const dateNew = newMonth(date, 9)
            const newDay= new Date(dateNew.setDate(dateNew.getDate() + 7 ))
            const dateFinal=newDay.toDateString()
    
            setEdd(dateFinal) 
        }
        
            

    }, [date])
    
    if (edd){
        return (
            <div className='mb-6'>
                <h3 className='text-lg font-bold'>EXPECTED DATE OF DELIVERY</h3>   
                <p className='text-base font-normal'>{edd}</p> 
            </div>
        );
    }
    

};

export default ConvertEdd
