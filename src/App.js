import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      Welcome To {process.env.REACT_APP_MODE} Mode
    </div>
  );
}

export default App;
