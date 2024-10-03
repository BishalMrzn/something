import React,{useState}from 'react'

export default function Textform(props) {
  const handleSpace=()=>{
    const newText=text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Removed Space","success")
  }
 
  const handleDownCLick=()=>{
    const newText=text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCase was clicked","success")
  }
  const handleUpCLick=()=>{
    const newText=text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCAse Was clicked","success")
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
    const [text,setText]=useState("");
    // const [bolded,notbolded]=useState(false);

    
  return (
    <div className='container' style={{color:props.mode==='light'?'#000023':'white'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#000023':'white',color:props.mode==='light'?'#000023':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
<button className="btn btn-primary" onClick={handleUpCLick}>Change to upperCase</button>
<button className="btn btn-primary" onClick={handleDownCLick}>Change to LowerCase</button>
<button className="btn btn-primary" onClick={handleSpace}>remove space</button>

</div>

<div className="container"style={{color:props.mode==='light'?'#000023':'white'}}>
  <h2>Preview</h2>
  <p>{text.length>0 ?text:'Enter the text to preview'}</p>
</div>
    </div>
  )
}
