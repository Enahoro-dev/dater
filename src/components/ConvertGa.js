import React, {useState, useEffect} from 'react';

const ConvertGa = ({date}) => {
    const [ga, setGa] = useState('')

    useEffect(() => {
        if (date) {
            const d1 = date.getTime()
            const d2 = new Date().getTime()
            const diff= (d2 - d1)/(1000*60*60*24)
            const diffInteger = Math.floor(diff)
            const weeks=Math.floor(diffInteger/7)
            const days=Math.floor(diffInteger % 7)
            const weekUnit = weeks > 1 ? 'weeks': weeks < 1 ? '' : 'week'
            const dayUnit = days > 1 ? 'days': days < 1 ? '' : 'day'
            const weekFormatted = weeks < 1 ? '' : weeks
            const dayFormatted = days < 1 ? '' : days
            const age=`${weekFormatted} ${weekUnit} ${dayFormatted} ${dayUnit}`
            setGa(age)
        }
        
    }, [date])
    


    if (ga){
        return(
            <div>
                <h3>GA: {ga} </h3>    
            </div>
        )
        
    }
  

};

export default ConvertGa