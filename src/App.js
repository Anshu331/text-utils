


import './App.css';

import Navbar from './components/Navbar';
//import About from './components/About';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';



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
<>

<Navbar title="Textutils" mode = {mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className= "container my-3">


{/* <About/> */}
<Textform showAlert={showAlert} heading = "Enter the text to analyze" />
</div>

</>
        
  );
}
 
export default App;
