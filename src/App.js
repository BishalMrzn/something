
import './App.css';
import Accordian from './component/Accordian';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  return (
    <>
     <Navbar/>
     <div className="container">

     <Textform heading="Change your text below"/>
     <Accordian/>
     </div>
    </>
  );
}

export default App;
