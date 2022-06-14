import './nav.css'
import React from 'react'

export default props =>
<aside className='menu-area'>
    <nav className='menu'>
      <a href="/ ">
<i className='fa fa-home'></i>

<p>Início</p>

      </a>
      
      <a href='/computadores'>
          <i className="fa fa-keyboard-o"></i>
         
          <p>Computadores</p>
          
      </a>
      <a href='/impressoras'>
        
          <i className="fa fa-print"></i>
          
          <p>Impressoras</p>
        
      </a>
      <a href='/monitores'>
          <i className="fa fa-desktop"></i>
        
         <p> Monitores</p>
          
      </a>
    </nav>
</aside>
