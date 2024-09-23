import React,{useState}from 'react'

export default function Textform(props) {
    const [text,setText]=useState("Enter your text");
    
  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
<button className="btn btn-primary">Change to upperCase</button>
</div>

    </div>
  )
}
