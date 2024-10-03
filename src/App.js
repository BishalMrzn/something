
import { useState } from 'react';
import './App.css';
// import Accordian from './component/Accordian';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';

function App() {
  const[alert,setalert]=useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglebtn=()=>{
    if(mode==='dark'){
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled","success")
  }
else{
  
  setMode('dark')
  document.body.style.backgroundColor='#000023'
  showAlert("Dark mode has been enabled","success")
}}
  const [mode,setMode]=useState('dark')
  return (
    <>
     <Navbar mode={mode} togglebtn={togglebtn}/>
     <Alert alert={alert}/>
     <div className="container">

     <Textform heading="Change your text below" mode={mode} showAlert={showAlert}/>
     {/* <Accordian heading="My Accordian"/> */}
     
     </div>
    </>
  );
}

export default App;
