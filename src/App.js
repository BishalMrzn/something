
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  return (
    <>
     <Navbar/>
     <div className="container">

     <Textform heading="Change your text below"/>
     </div>
    </>
  );
}

export default App;
