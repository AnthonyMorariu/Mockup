import React, { Component } from 'react';
import './App.css';

//Components
import Nav from './components/Nav';
import Notif from './components/Notifications'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Notif/>
    </div>
  );
}

export default App;
