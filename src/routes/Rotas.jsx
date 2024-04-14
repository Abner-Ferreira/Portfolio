import React from 'react';
import { Route, Routes } from "react-router-dom";
import Error from '../pages/404/Error';
import About from '../pages/about/About';
import Home from '../pages/home/Home';
import Portfolio from '../pages/portfolio/Portfolio';
// import { Container } from './styles';

function Rotas() {
  return (
    <>
        <Routes>

            <Route path="/" element={<Home/> }/>
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/> 
            <Route path="*" element={<Error/>}/> 
            
        </Routes>
    </>
  );
}

export default Rotas;