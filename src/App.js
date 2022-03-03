import React from 'react';
import HomePage from './components/pages/homepage.component';
import { Routes, Route, Link } from "react-router-dom";
import HatsPage from './hatspage.component';
import Shop from './components/shop/shop.component';
import './App.css';


function App(){
  return(
    <div>
    <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path='/shop' element={< Shop/>} />
      <Route path='/shop/hats' element={< HatsPage/>} />
    </Routes>
    </div>
    )
}


export default App;
