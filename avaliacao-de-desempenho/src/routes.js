import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './templates/Home';
import Login from './templates/Login';

const Rotes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />  
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotes;

