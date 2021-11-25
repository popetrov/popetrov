import React, { FC, MouseEvent, useState } from 'react'

export type CounterTextProps = {
    counter: number,
    func:()=>void,
    number:number,
    string:string
}

const CounterText:FC <CounterTextProps> = ({counter, func, number, string}) =>{
    if(counter<5){
    return(
        <h2>Counter value: {counter}</h2>
    )}else{
        return(
            <h1>Big Counter value: {counter} + Very Good</h1>
        )
    }
}

type MyLinkProps = {
    text:number
}



export const Lesson = ()=>{
    const [state, setState] = useState(0)

    const MyLink:FC<MyLinkProps>=({text})=>{
        return(
            <a href="/test" onClick={onclick}>{text}</a>
        )
    }
    
    const onclick = (e: { preventDefault: () => void })=>{
        e.preventDefault()
        setState(Number(state)+3)
        
    }

    const handleClick = () =>{
        setState(Number(state)+1)
    }

    const handleTab = (e: any)=>{
        setState(e.target.getAttribute('data-name'))
    }

    const TABS_BTN = [
        {
            dataName:1,
            title:'Counter 1'
        },
        {
            dataName:2,
            title:'Counter 2'
        },
        {
            dataName:3,
            title:'Counter 3'
        },
    ]
    
    const people = ['Jack', 'Alex', 'John', 'Bill']

    return(
        <div>
            <MyLink text={state}/>
            <CounterText 
                counter={state}
                func={()=>{}}
                number={1}
                string={`string`} 
            />
            <button onClick={handleClick}>Counter Plus 1</button>
            {TABS_BTN.map(({title, dataName})=>{
                return <button
                    key={`${dataName}-${title}`}
                    data-name={dataName}
                    onClick={handleTab}
                >{title}</button>
            })}
            <h3>This is TAB{state}</h3>
            <ul>
                {people.map((person, index)=>{
                   return <li key={index}>{person}</li>
                })}
            </ul>
        </div>
    )
}