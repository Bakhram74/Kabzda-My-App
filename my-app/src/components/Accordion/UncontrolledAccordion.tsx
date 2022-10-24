import React, {useState} from 'react'

type AccordingPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordingPropsType) {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionPropsTitleType = {
    title: string
    onClick: () => void
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