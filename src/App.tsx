// @ts-nocheck
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Home from './pages/home';
import Character from './pages/character';

function App() {
  return (
      <Router>
        <Home path="/" />
        <Character path="/:slug" />
      </Router>
  );
}

export default App;
