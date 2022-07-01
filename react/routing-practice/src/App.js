import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Id from './components/Id';
import Style from './components/Style';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element= {<Home/>}/>
          <Route path="/:id" element={<Id/>} />
          <Route path="/:word/:color/:backgroundColor" element={<Style/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
