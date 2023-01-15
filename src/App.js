import './App.css';
import React from 'react';
import HomePage from './Routes/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Technology from './Routes/Technology';
import Entertainment from './Routes/Entertainment';
import Sports from './Routes/Sports';
import Politics from './Routes/Politics';
import Travel from './Routes/Travel';
import Business from './Routes/Business';
import Food from './Routes/Food';
import Beauty from './Routes/Beauty';
function App() {
  return(
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Technology" element={<Technology/>}/>
        <Route path="/Entertainment" element={<Entertainment/>}/>
        <Route path="/Sports" element={<Sports/>}/>
        <Route path="/Politics" element={<Politics/>}/>
        <Route path="/Travel" element={<Travel/>}/>
        <Route path="/Business" element={<Business/>}/>
        <Route path="/Food" element={<Food/>}/>
        <Route path="/Beauty" element={<Beauty/>}/>
      </Routes>
    );
}

export default App;
