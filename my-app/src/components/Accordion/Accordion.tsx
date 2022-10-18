import React from 'react'
type AccordingPropsType = {
    titleValue: string
    collapsed: boolean
}
export function Accordion(props:AccordingPropsType){
    return (
        <div>
        <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/> }
        </div>
    )
}
type AccordionPropsTitleType = {
    title: string
}
function AccordionTitle(props:AccordionPropsTitleType){
    return  <h3>--{props.title}--</h3>
}
function AccordionBody(){
    return(
        <ul>
            <li>1</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}