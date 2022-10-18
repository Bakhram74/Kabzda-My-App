import React, {useState} from 'react'
type AccordingPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props:AccordingPropsType){
    const [collapsed,setCollapsed] = useState(true)

    return (
        <div>
        <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>{debugger; setCollapsed(!collapsed)
                console.log(collapsed)}}>TOGGLE</button>
            { !collapsed && <AccordionBody/> }
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