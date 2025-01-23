import { useState,useRef, useEffect } from "react"


const UseRef = ()=>{
    var [text,setText] = useState("")
    var prevRender = useRef()

    useEffect(
        ()=>{
            prevRender.current=text
        }
    ,[text])

    return(
        <div>
            <h1>This page is ment to useRef</h1>
            <input type="text" value = {text} onChange={(e)=>setText(e.target.value)}></input>
            <h3>The enter text is {text}</h3>
            <h3>The previous render text is {prevRender.current}</h3>
        </div>
    )
}

export default UseRef