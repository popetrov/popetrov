import React, { FC, useState } from 'react'

export type CounterTextProps = {
    counter: number,
    func:()=>void,
    number:number,
    string:string
}

const CounterText:FC <CounterTextProps> = ({counter, func, number, string}) =>{
    console.log(counter, func, number, string)
    return(
        <h1>Counter value: {counter}</h1>
    )
}

export const Lesson = ()=>{
    const [state, setState] = useState(0)

    const handleClick = () =>{
        setState(state+1)
    }

    return(
        <div>
            <CounterText 
                counter={state}
                func={()=>{}}
                number={1}
                string={`string`} 
        />
            <button onClick={handleClick}>Counter Plus</button>
        </div>
    )
}