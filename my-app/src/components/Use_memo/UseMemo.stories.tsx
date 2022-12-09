import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "Use Memo"
}


export const Use_Memo_Example = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

     const resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const value = Math.random()
            }
            tempResult *= i
        }
         return tempResult
    }, [a])

    let resultB = 1
    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </>
    )
}

const UsersSecret = (props:{users:Array<string>})=>{
    console.log("users secret")
    return(
        <div>{
            props.users.map((u,i)=> <div key={i}>{u}</div>)
        }</div>
    )
}
const Users = React.memo(UsersSecret)

export const ReactMemoWithUseMemo = ()=>{
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(["Dima","Valera","Petr"])

    const newArray = useMemo(()=>{
      return   users.filter(u=> u.toLowerCase().indexOf("a"))
    },[users])

    const adduser = ()=>{
        const copyUsers = [...users,"Sveta"+new Date().getTime()]
        setUsers(copyUsers)}

    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <button onClick={adduser}>+</button>
            <Users users={newArray}/>
        </div>

    )
}

export const LikeUseCallback = ()=>{
    console.log('LikeUseCallback')
    const [counter,setCounter] = useState(0)
    const [books,setBooks] = useState(["React","JS","Golang",'CSS'])


    const addBooks = useCallback(()=>{
        console.log(books)
        const copyBooks = [...books,"Angular"+new Date().getTime()]
        setBooks(copyBooks)
        },[books])

const memoizedBooks = useMemo(()=>{
     return ()=>{
         console.log(books)
         const copyBooks = [...books,"Angular"+new Date().getTime()]
         setBooks(copyBooks)
     }
},[books])

    return(
        <div>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <Books addBooks={memoizedBooks}/>
        </div>

    )
}
const BookSecret = (props:{addBooks:()=>void})=>{
    console.log("books secret")
    return(
        <div>
            <div><button onClick={props.addBooks}>add books</button></div>
        </div>
    )
}
const Books = React.memo(BookSecret)
