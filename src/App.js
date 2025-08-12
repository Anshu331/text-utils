


import './App.css';

import Navbar from './components/Navbar';
//import About from './components/About';
import Textform from './components/Textform';
import LiveRooms from './components/LiveRooms';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

   const showAlert = (message,type)=>{
    setAlert({
    msg: message,
    type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled", "success");
  }
}
return (
<Router>

<Navbar title="Textutils" mode = {mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className= "container my-3">

<Routes>
  <Route path="/" element={<Textform showAlert={showAlert} heading = "Enter the text to analyze" />} />
  <Route path="/live-rooms" element={<LiveRooms />} />
</Routes>

{/* <About/> */}
</div>

</Router>
        
  );
}
 
export default App;
