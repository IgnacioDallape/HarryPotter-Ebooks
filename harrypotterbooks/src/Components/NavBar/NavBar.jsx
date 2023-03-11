import React from 'react'
import { Link } from 'react-router-dom'
import grifindor from '../Assets/inicio/grifindor.jpg'



const NavBar = () => {


  return (
    <>
    
    <div style={{display:'flex', justifyContent:'center'}} className='bg-dark'>
                
        <nav className="navbar navbar-expand-lg navbar-light " >
        <div  style={{display:'flex',justifyContent:'start', position:'relative', right:'35rem', border:' 7px white solid', borderRadius:'0.5rem' }}>
                    <img src={grifindor} alt=""   style={{width:'5rem'}}/>
                </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <ul className="navbar-nav mr-auto">
              
              <li style={{padding:'1rem'}}>
                

                <Link to={'/'}>Inicio </Link>
              </li>
              <li className="nav-item active" style={{padding:'1rem'}}>
                <Link to={'/Books'} className='button'>Libros </Link>
              </li>
              <li className="nav-item" style={{padding:'1rem'}}>
              <Link to={'/Formulario'}>Contacto </Link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
    </>
  )
}

export default NavBar
