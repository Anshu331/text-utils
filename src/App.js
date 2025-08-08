


import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';

// Lazy-loaded component for code splitting
const About = lazy(() => import('./components/About'));


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
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />

    {/* suspense fallback keeps bundle size small & UX acceptable */}
    <Suspense fallback={<div className="text-center my-5">Loading...</div>}>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Suspense>
  </Router>
);
}
 
export default App;
