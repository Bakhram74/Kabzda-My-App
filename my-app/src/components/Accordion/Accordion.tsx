import React from 'react'
type AccordingPropsType = {
    titleValue: string
    collapsed: boolean
}
export function Accordion(props:AccordingPropsType){
    console.log("Accordion rendering")
    if(props.collapsed){
    return (
        <div>
        <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
    }else{
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
}
type AccordionPropsTitleType = {
    title: string
}
function AccordionTitle(props:AccordionPropsTitleType){
    console.log('AccordionTitle rendering')
    return  <h3>--{props.title}--</h3>
}
function AccordionBody(){
    console.log("AccordionBody rendering")
    return(
        <ul>
            <li>1</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}