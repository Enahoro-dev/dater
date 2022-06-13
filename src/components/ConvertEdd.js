import React, {useState, useEffect} from 'react';

const ConvertEdd = ({date}) => {
    const [expectedDelivery, setExpectedDelivery] = useState('')
    
    useEffect(() => {
        if (date) {
            const newMonth = (date, days) => {
                const newDate = new Date(date.getTime());
                newDate.setMonth(date.getMonth() + days);
                return newDate;
            }
            const dateNew = newMonth(date, 9)
            const newDay= new Date(dateNew.setDate(dateNew.getDate() + 7 ))
            const dateFinal=newDay.toDateString()
    
            setExpectedDelivery(dateFinal) 
        }
        
            

    }, [date])
    
    if (expectedDelivery){
        return (
            <div className='mb-6'>
                <h3 className='text-lg font-bold'>EXPECTED DATE OF DELIVERY</h3>   
                <p className='text-base font-normal'>{expectedDelivery}</p> 
            </div>
        );
    }
    

};

export default ConvertEdd
