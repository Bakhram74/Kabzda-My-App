import React from 'react'
type ItemType = {
    title:string
    value:any
}
export type AccordingPropsType = {
    titleValue: string
    setCollapsed: () => void
    collapsed: boolean
    items:ItemType[]
    onClick:(value:any)=>void

}

export function Accordion(props: AccordingPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
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

type AccordionBodyType = {
    items:ItemType[]
    onClick:(value:any)=>void
}

function AccordionBody(props:AccordionBodyType) {
    return (
        <ul>
            {props.items.map((i,index) => <li onClick={()=>props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>

    )
}