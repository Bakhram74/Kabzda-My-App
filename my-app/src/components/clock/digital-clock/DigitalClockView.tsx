import React from "react";
import {ClockViewPropsType} from "../Clock";

const doubleDigits = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date})=>{
    return (
        <div>
            <span>{doubleDigits(date.getHours())}</span>
            :
            <span>{doubleDigits(date.getMinutes())}</span>
            :
            <span>{doubleDigits(date.getSeconds())}</span>
        </div>
    )
}