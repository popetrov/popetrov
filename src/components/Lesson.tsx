import React, { FC, Fragment, useState} from 'react'
import './style.css'

export const Form = ()=>{
    const [inputText, setInputText] = useState([])
    const[textAreaText, setTextAreaText] = useState([])
    const[click, setClick] = useState({name:'', text:'', favoriteName:''})
    const[selectText, setSelectText] = useState("выберите любимое имя")

    const NAME = [
        {
            id:'1',
            title:'Pasha'
        },
        {
            id:'2',
            title:'Makar'
        },
        {
            id:'3',
            title:'Marina' 
        }
    ]

    const inputHandleChange = (e:any)=>{
        setInputText(e.target.value)
    }

    const textAreaHandleChange = (e:any)=>{
        setTextAreaText(e.target.value)
    }

    const clickHandle = (e:any)=>{
        e.preventDefault()
        setClick({name:`${inputText}`, text:`${textAreaText}`, favoriteName:`${selectText}`})
        console.log(click)
    }

    const selectHandleChange = (e:any)=>{
        setSelectText(e.target.value)
    }

    return(
        <Fragment>
            <form action="" className="form">
                <label htmlFor="text">
                    name:
                    <input type="text" name="name" value={inputText} onChange={inputHandleChange}/>
                </label>
                <label htmlFor="text">Comment</label>
                <textarea id="text" value={textAreaText} onChange={textAreaHandleChange}></textarea>
                <button onClick={clickHandle}>Click</button>
                <select value={selectText} onChange={selectHandleChange}>
                    <option value="liked name" ></option>
                    {NAME.map(({id,title})=>(
                        <option id={id+title}>{title}</option>
                    )
                    )}
                </select>
            </form>
            <p>{click.name}</p>
            <p>{click.text}</p>
            <p>{click.favoriteName}</p>
        </Fragment>
        
    )
}