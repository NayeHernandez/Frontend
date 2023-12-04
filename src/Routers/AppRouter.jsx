import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Signup';
import Navbar from '../Components/Nabvar';

const AppRouter = () => {
  return (
    <Routes>
  
        <Route path="/" element={<Navbar />}></Route>

        <Route path="/Home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register/>}></Route>

    
    </Routes>
  );
};

export default AppRouter;
