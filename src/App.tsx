import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Episode from './pages/episode';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Episode />} path="/episode/:slug" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
