import './nav.css'
import React from 'react'

export default props =>
<aside className='menu-area'>
    <nav className='menu'>
      <a href="#/ ">
<i className='fa fa-home'></i>
<hr/>
Início
<hr/>
      </a>
      
      <a href='#/computadores'>
          <i className="fa fa-keyboard-o"></i>
          <hr/>
          Computadores
          <hr/>
      </a>
      <a href='#/impressoras'>
        
          <i className="fa fa-print"></i>
          <hr/>
          Impressoras
          <hr/>
      </a>
      <a href='#/monitores'>
          <i className="fa fa-desktop"></i>
          <hr/>
          Monitores
          <hr/>
      </a>
    </nav>
</aside>
