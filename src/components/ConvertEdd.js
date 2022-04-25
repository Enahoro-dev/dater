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
            console.log(date)
            const dateNew = newMonth(date, 9)
            console.log(dateNew)
            const newDay= new Date(dateNew.setDate(dateNew.getDate() + 7 ))
            const dateFinal=newDay.toDateString()
    
            setEdd(dateFinal) 
        }
        
            

    }, [date])
    
    if (edd){
        return (
            <div>
                <h3>EDD: {edd} </h3>    
            </div>
        );
    }
    

};

export default ConvertEdd
