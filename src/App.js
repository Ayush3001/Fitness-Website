import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useState } from 'react';
function App ()  {
 
  return (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">

    <Navbar />
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/exercise/:id" element={<ExerciseDetail />} />
      
    </Routes>
    
    <Footer />
 
  </Box>
  
  
);

}

export default App;
