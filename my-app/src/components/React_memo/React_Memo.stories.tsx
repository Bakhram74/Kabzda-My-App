import React, {useState} from "react";

export default {
    title: "React memo"
}


const NewMessagesCounter = (props:{counter:number})=>{
    return(
        <div>{props.counter}</div>
    )
}
const UsersSecret = (props:{users:Array<string>})=>{
    console.log("users")
    return(
        <div>{
            props.users.map((u,i)=> <div key={i}>{u}</div>)
        }</div>
    )
}
const Users = React.memo(UsersSecret)

export const Example1 = ()=>{
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(["Dima","Valera","Petr"])
    const adduser = ()=>{
        const copyUsers = [...users,"Sveta"+new Date().getTime()]
        setUsers(copyUsers)
    }
    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={adduser}>+</button>
            <NewMessagesCounter counter={counter}/>
            <Users users={users}/>
        </div>

        )
}