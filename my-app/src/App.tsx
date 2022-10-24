import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/onOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Rating, RatingValuesType} from "./components/Rating/Rating";


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValuesType>(1)
    const [on, setOn] = useState<boolean>(true)
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)

    return (
        <div className={'App'}>
            <OnOff setColor={setOn} isOn={on}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            <Accordion titleValue={"Menu"} setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                       collapsed={accordionCollapsed}/>
        </div>
    );
}


export default App;
