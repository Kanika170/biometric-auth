// src/App.js

import React from 'react';
import WebAuthn from './WebAuthn';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Biometric Authentication</h1>
      <div className="button-container">
        <button className="btn" onClick={WebAuthn.registerUser }>
          Register Biometric Credential
        </button>
        <button className="btn" onClick={WebAuthn.authenticateUser }>
          Authenticate with Biometric
        </button>
      </div>
    </div>
  );
};

export default App;