import React, { FC, Fragment, useState} from 'react'
import './style.css'

export const Form = ()=>{
    const [inputText, setInputText] = useState('')
    const[textAreaText, setTextAreaText] = useState('')
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

    const handleChange = ()=>{
        setInputText(inputRef.current!.value)
        setTextAreaText(textAreaRef.current!.value)
        setSelectText(selectRef.current!.value)
    }

    const inputRef = React.createRef<HTMLInputElement>()
    const textAreaRef = React.createRef<HTMLTextAreaElement>()
    const selectRef = React.createRef<HTMLSelectElement>()
   
    const clickHandle = (e:any)=>{
        e.preventDefault()
        setClick({name:`${inputText}`, text:`${textAreaText}`, favoriteName:`${selectText}`})
        console.log(click)
    }


    return(
        <Fragment>
            <form action="" className="form">
                <label htmlFor="text">
                    name:
                    <input ref={inputRef} type="text" name="name" value={inputText} onChange={handleChange}/>
                </label>
                <label htmlFor="text">Comment</label>
                <textarea ref={textAreaRef} id="text" value={textAreaText} onChange={handleChange}></textarea>
                <button onClick={clickHandle}>Click</button>
                <select ref={selectRef} value={selectText} onChange={handleChange}>
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