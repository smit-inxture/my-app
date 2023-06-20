import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState({bsColor:'light',color:'white'}) 
  const [alert, setAlert] = useState(null);
  const toggleMode = (message,data) => {
    
    setMode(message,data)
    console.log(message,data ,mode)
    document.body.style.backgroundColor = data
  }
  const showAlert=(message,alert)=>{
    setAlert(
      {message:message,alert:alert}
      );
    setTimeout(() => {
      setAlert(null);
    }, 3000)
 }

  return (
  <>
  <Router>
    <Navbar mode={mode} title='TextUtils' toggleMode = {toggleMode}  />
    <Alert alert={alert}/>
    <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} ttoggleMode={toggleMode} />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;
