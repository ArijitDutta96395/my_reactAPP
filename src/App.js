import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(prevShowText => !prevShowText);
  };

  return (
    <div className="App">
      <button className="my-button" onClick={handleClick}>
        {showText ? 'Hide Text' : 'Show Text'}
      </button>
      {showText && <p className="my-text">Hayyy girls, Arijit This Side...</p>}
    </div>
  );
};

export default App;
