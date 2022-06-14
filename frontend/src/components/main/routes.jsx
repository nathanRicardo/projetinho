import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../home/home'
import Computadores from '../computer/cpCrud'
import Impressoras from '../computer/impCrud'
import Monitores from '../computer/mnCrud'
export default props => (
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/computadores' element={<Computadores/>} />
        <Route path='/impressoras' element={<Impressoras/>} />
        <Route path='/monitores' element={<Monitores/>} />
    </Routes>
);