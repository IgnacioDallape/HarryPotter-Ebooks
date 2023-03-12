import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart/Cart'



const NavBar = () => {


  return (
    <>
    
    <div style={{display:'flex', justifyContent:'center',backgroundColor:'black'}} >
        
        <nav className="navbar navbar-expand-lg navbar-light container-fluid " >
        
        
                

          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:'flex', justifyContent:'flex-start'}}>
            <div style={{ display:'flex',justifyContent:'flex-start'}}>
              <img src="https://i.pinimg.com/564x/a4/58/18/a45818319b8af134a917e664c08bff92.jpg" alt="" style={{width:'8rem'}}/>
            </div>

            <ul className="navbar-nav mr-auto container" style={{display:'flex',justifyContent:'center', position:'relative', left:'30rem '}}>

              <li style={{padding:'1rem'}}>
                
                <Link to={'/'} className='button'>Inicio </Link>
              </li>
              <li className="nav-item active" style={{padding:'1rem'}}>
                <Link to={'/Books'} className='button'>Libros </Link>
              </li>
              <li className="nav-item" style={{padding:'1rem'}}>
              <Link to={'/Formulario'} className='button'>Contacto </Link>
              </li>
            </ul>
          </div>
          
        </nav>
        <div className='flexEnd' style={{position:'relative', right:'2rem', top:'2rem'}}>
          <Cart  />  
        </div>    
    </div>
    
    </>
  )
}

export default NavBar
