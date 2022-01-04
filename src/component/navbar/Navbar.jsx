import React from 'react'
import './navbar.css'
import logo from '../../logo.png'

const Navbar = () => {
    return (
        <>
           <div className='topnavbar'>
              <div className='row'>
                  <div className='col-lg-8 col-6 col-md-6'>
                       <img src={logo} className='logo'/>
                    
                  </div>
                  <div className='col-lg-4 col-6 col-md-6'>
                      <div className='navbar-icon'>
                         <a href='https://www.facebook.com/Foren.Mal.vau.ok'><i class="fab fa-facebook"></i></a>  
                          <a><i class="fab fa-instagram"></i></a>
                           <a> <i class="fab fa-twitter"></i></a>
                      </div>
                  </div>
              </div>
           </div> 
        </>
    )
}

export default Navbar
