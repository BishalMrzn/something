import React,{useState}from 'react'

export default function Textform(props) {
  const handleBoldCLick=()=>{
    notbolded(!bolded)
  }
  const handleDownCLick=()=>{
    const newText=text.toLowerCase();
    setText(newText);
  }
  const handleUpCLick=()=>{
    const newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
    const [text,setText]=useState("Enter your text");
    const [bolded,notbolded]=useState(false);

    
  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
<button className="btn btn-primary" onClick={handleUpCLick}>Change to upperCase</button>
<button className="btn btn-primary" onClick={handleDownCLick}>Change to LowerCase</button>
<button className="btn btn-primary" onClick={handleBoldCLick}>Change to Bold</button>
</div>

    </div>
  )
}
