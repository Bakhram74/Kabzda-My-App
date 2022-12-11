import React, {FC, useEffect, useState} from 'react';
type ClockPropsType = {

}
const doubleDigits = (num:number)=>num < 10 ? '0'+num : num
const Clock:FC<ClockPropsType>= (props) => {

    const [date,setDate] = useState(new Date())

    useEffect(()=>{
    const intervalId = setInterval(()=>{
            console.log('tick')
            setDate(new Date())
        },1000)
        return ()=>{
        clearInterval(intervalId)
        }
    },[])

    return (
        <div>
            <span>{doubleDigits(date.getHours())}</span>
            :
            <span>{doubleDigits(date.getMinutes())}</span>
            :
            <span>{doubleDigits(date.getSeconds())}</span>
        </div>
    );
};

export default Clock;