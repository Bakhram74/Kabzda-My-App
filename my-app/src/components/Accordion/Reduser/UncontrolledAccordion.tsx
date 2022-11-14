import React, {useReducer, useState} from 'react'
import {reducer, TOGGLE_COLLAPSED} from "./Reduser";

type AccordingPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordingPropsType) {
    // const [collapsed, setCollapsed] = useState(true)
    const [state,dispatch] = useReducer(reducer,{collapsed:false})
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type:TOGGLE_COLLAPSED})}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}
function AccordionTitle(props: AccordionPropsTitleType) {
    return <h3 onClick={props.onClick}>--{props.title}--</h3>
}
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}
type AccordionPropsTitleType = {
    title: string
    onClick: () => void
}