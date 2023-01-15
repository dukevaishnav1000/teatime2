import './App.css';
import HomePage from './Routes/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SpecificTopics from './Routes/SpecificTopics';
import React from 'react';

function App() {
  return(
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Technology" element={<SpecificTopics/>}/>
        {/* <Route path="/Entertainment" element={<SpecificTopics/>}/>
        <Route path="/Sports" element={<SpecificTopics/>}/>
        <Route path="/Politics" element={<SpecificTopics/>}/>
        <Route path="/Travel" element={<SpecificTopics/>}/>
        <Route path="/Business" element={<SpecificTopics/>}/>
        <Route path="/Food" element={<SpecificTopics/>}/>
        <Route path="/Beauty" element={<SpecificTopics/>}/> */}
      </Routes>
    );
}

export default App;
