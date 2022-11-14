import React, {useState} from "react";
import {AccordingPropsType, Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion,
}
export const ModeChanging = ()=>{
    const onClickCallBack = action("some item was clicked")
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    return(
        <Accordion onClick={(id)=>{alert(`user with id ${id}`)}} items={[{title:"Dima",value:1},{title:"Olya",value:2},{title:"Viktor",value:3},{title:"Katya",value:4}]} titleValue={"Menu"} setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                   collapsed={accordionCollapsed}/>
        )
}