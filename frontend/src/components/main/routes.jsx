import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../home/home'
import Computadores from '../computer/cpCrud'

export default props => (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/#/computadores' element={<Computadores/>} />
        
    </Routes>
);