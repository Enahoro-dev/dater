import React, {useState, useEffect} from 'react';

const ConvertEdd = ({date}) => {
    const [expectedDelivery, setExpectedDelivery] = useState('')
    
    useEffect(() => {
        if (date) {
            const newMonth = (date, months) => {
                const newDate = new Date(date.getTime());
                newDate.setMonth(date.getMonth() + months);
                return newDate;
            }
            const dateNew = newMonth(date, 9)
            //created a function to add nine months to the last menstrual period
            const newDay= new Date(dateNew.setDate(dateNew.getDate() + 7 ))
            const dateFinal=newDay.toDateString()
            //added a week and converted to a date string which creates the average expected date of delivery
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
