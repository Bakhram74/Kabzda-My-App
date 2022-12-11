import {useEffect, useMemo, useState} from "react";

export default {
    title: "UseState"
}
const generateData = ()=>{
    console.log('generate')
    return 23243345
}

export const Example1 = ()=>{
    console.log('example')
    const [counter,setCounter] = useState(generateData)

useEffect(()=>{
    debugger
    console.log('useEffect')
    document.title = counter.toString()
    },[])
    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <br/>
            {counter}
        </div>
    )
}


export const SetTimeOutExample = ()=>{
    const [date,setDate] = useState(new Date())

    useEffect(()=>{
setInterval(()=>{
    setDate(new Date())
},1000)
    },[])

    return(
        <div>
                {date.toLocaleTimeString()}
        </div>
    )
}

