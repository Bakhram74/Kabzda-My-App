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
    console.log('SetTimeOutExample')
    const [counter,setCounter] = useState("")
    const [fake,setFake] = useState(1)

    useEffect(()=>{
        const date = new Date()
setInterval(()=>{
    setCounter(date.toLocaleTimeString())
},1000)
    })

    return(
        <div>
           <div>
                {counter}
                {/*{fake}*/}
           </div>
            {/*<button onClick={()=>setCounter(counter+1)}>counter</button>*/}
            {/*<button onClick={()=>setFake(fake+1)}>fake</button>*/}
            <br/>
        </div>
    )
}

