import './nav.css'
import React from 'react'

export default props =>
<aside className='menu-area'>
    <nav className='menu'>
      <a href="#/ ">
<i className='fa fa-home'></i>
Início
      </a>
      <a href='#/computadores'>
          <i className="fa fa-keyboard-o"></i>
          Computadores
      </a>
      <a href='#/impressoras'>
        
          <i className="fa fa-print"></i>
          Impressoras
          
      </a>
      <a href='#/monitores'>
          <i className="fa fa-desktop"></i>
          Monitores
      </a>
    </nav>
</aside>
