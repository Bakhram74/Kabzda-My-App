import React from 'react'

type AccordingPropsType = {
    titleValue: string
    setCollapsed: () => void
    collapsed: boolean
}

export function Accordion(props: AccordingPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionPropsTitleType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionPropsTitleType) {
    return <h3 onClick={props.setCollapsed}>--{props.title}--</h3>
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