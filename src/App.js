import React, { useState } from 'react';
import { Switch, Route} from 'react-router-dom';
import { Homepage, Navbar, Footer, Form } from './components';
import './App.css';

function App() {
  return (
    <div>
      <div className="main">
        <div>
          <Navbar />
        </div>
        <Homepage />
        <Footer />
      </div>
    </div>

  );
}

export default App;
