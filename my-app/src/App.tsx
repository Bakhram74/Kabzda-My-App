import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    console.log('App rendering')
    return (
        <div >

            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
<Rating value={1}/>
<Rating value={2}/>
<Rating value={3}/>
<Rating value={4}/>
<Rating value={5}/>

        </div>
    );
}



type PagePropsType = {
    title: string
}
function PageTitle(props: PagePropsType){
    console.log("PageTitle rendering")
    debugger
    return(
        <h1>{props.title}</h1>
    )
}

export default App;
