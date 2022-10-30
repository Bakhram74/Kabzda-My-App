import React, {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion stories',
    component: Accordion,
}
const callBack = action('on or off clicked')
export const CollapsedMenuMode = () => <Accordion titleValue={"Menu"} setCollapsed={callBack}
                                       collapsed={true}/>
export const UnCollapsedUserMode = () => <Accordion titleValue={"User"} setCollapsed={callBack}
                                         collapsed={false}/>
export const ChangeCollapse = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    return <Accordion titleValue={"Menu"} setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                      collapsed={accordionCollapsed}/>
}

