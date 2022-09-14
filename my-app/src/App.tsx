import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

// function sum(a:number, b:number){
//     alert(a + b)
// }
// sum(10,5)
function App() {
    console.log('App rendering')
    return (
        <div >
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>

            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>

            <Rating value={1}/>
            <Rating value={2}/>
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
