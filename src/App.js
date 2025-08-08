


import './App.css';

import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState, useCallback } from 'react';
import Alert from './components/Alert';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = useCallback((message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }, []);

    const toggleMode = useCallback(() => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "success");
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }
    }, [mode, showAlert]);

    return (
        <>
            <Navbar 
                title="TextUtils" 
                mode={mode} 
                toggleMode={toggleMode} 
            />
            <Alert alert={alert} />
            <div className="container my-3">
                <Textform 
                    showAlert={showAlert} 
                    heading="Enter the text to analyze" 
                    mode={mode}
                />
            </div>
        </>
    );
}

export default App;
