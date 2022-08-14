import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark mode has been enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(()=>{
      setAlert(null);
    },1000);
  }

  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}
    </>
  );
}

export default App;
