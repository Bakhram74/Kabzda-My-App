import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
    }
const callBack = action('on or off clicked')
export const On = ()=> <OnOff  setColor={callBack} isOn={true}/>
export const Off = ()=> <OnOff setColor={callBack} isOn={false}/>
export const OnOrOff = ()=>{
    const [on, setOn] = useState<boolean>(true)
    return <OnOff setColor={setOn} isOn={on}/>
}

