import React, {FC, useEffect, useState} from 'react';
import {DigitalClockView} from "./digital-clock/DigitalClockView";
import {AnalogClockView} from "./analog-clock/AnalogClockView";


export type ClockViewPropsType = {
    date:Date
}

type ClockPropsType = {
    mode: 'analog' | 'digital'
}


const Clock:FC<ClockPropsType> = ({mode}) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
     const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return ()=> clearInterval(intervalId)
    }, [])

    switch (mode) {
        case "analog":
          return <AnalogClockView date={date}/>

        case 'digital':
         return  <DigitalClockView date={date}/>
    }
};
export default Clock;