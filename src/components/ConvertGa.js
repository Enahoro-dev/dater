import React, {useState, useEffect} from 'react';

const ConvertGa = ({date}) => {
    const [gestationalAge, setGestationalAge] = useState('')

    useEffect(() => {
        if (date) {
            const lmp = date.getTime()
            const today = new Date().getTime()
            const pregnantDays= Math.floor((today - lmp)/(1000*60*60*24))
            const pregnantWeeks=Math.floor(pregnantDays/7)
            const remDays=Math.floor(pregnantDays % 7)
            const weekUnit = pregnantWeeks > 1 ? 'weeks': pregnantWeeks < 1 ? '' : 'week'
            const dayUnit = remDays > 1 ? 'days': remDays < 1 ? '' : 'day'
            const weekFormatted = pregnantWeeks < 1 ? '' : pregnantWeeks
            const dayFormatted = remDays < 1 ? '' : remDays
            const age=`${weekFormatted} ${weekUnit} ${dayFormatted} ${dayUnit}`
            //found the time between the last menstrual period and present day, converted to 'weeks' and 'days' format
            setGestationalAge(age)
        }
        
    }, [date])
    


    if (gestationalAge){
        return(
            <div>
                <h2 className='text-lg font-bold'>GESTATIONAL AGE</h2>    
                <p className='text-base font-normal'>{gestationalAge}</p>
            </div>
        )
        
    }
  

};

export default ConvertGa