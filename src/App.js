import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalcularImc from './components/CalcularImc';

function App() {
  return (
    <CalcularImc limite={50}/>
  );
}

export default App;
