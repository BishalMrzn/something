
import { useState } from 'react';
import './App.css';
// import Accordian from './component/Accordian';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  const togglebtn=()=>{
    if(mode==='dark'){
    setMode('light')
    document.body.style.backgroundColor='white'
  }
else{
  
  setMode('dark')
  document.body.style.backgroundColor='#000023'
}}
  const [mode,setMode]=useState('dark')
  return (
    <>
     <Navbar mode={mode} togglebtn={togglebtn}/>
     <div className="container">

     <Textform heading="Change your text below" mode={mode}/>
     {/* <Accordian heading="My Accordian"/> */}
     </div>
    </>
  );
}

export default App;
