import React from 'react'

import NavBar from '../NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import InicioImg from '../NavBar/InicioImg/InicioImg';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Inicio = () => {
    



  return (
    <>
    <div>
        <body>
            
            <header >
              <div style={{paddingTop:'1rem'}}>
                <h1 style={{display:'flex',justifyContent:'center', padding:'1rem', fontFamily:'cursive'}}> BIENVENIDO A HOWARTS</h1>
                <InicioImg/>
                <h4 style={{display:'flex',justifyContent:'center', padding:'1rem', fontFamily:'cursive',paddingTop:'3rem'}}> Encotrarás TODOS los libros de la saga a tu disposición</h4>
                <h5 style={{display:'flex',justifyContent:'center', padding:'1rem', fontFamily:'cursive'}}>Disfrutalos!</h5>


              </div>


            </header>
            <main>
              
              <div  style={{display:'flex',justifyContent:'space-around', position:'relative' , borderRadius:'0.5rem',paddingTop:'5rem', paddingBottom:'5rem' }}>
            <div style={{padding:'0.6 rem'}}>
              <img src='https://i.pinimg.com/564x/05/fe/a7/05fea7e886d20a43dca6ba9b3bb335ce.jpg' alt=""  className='aumentoImg' style={{width:'10rem', height:'12rem', borderRadius:'1rem', border:' 5px black solid'}}/>
            </div>
            <div style={{padding:'0.6 rem'}}>
              <img src='https://i.pinimg.com/736x/23/48/d4/2348d4fe9f010900b1cc8bd996f4ae12.jpg' alt=""  className='aumentoImg' style={{width:'10rem', height:'12rem', borderRadius:'1rem', border:' 5px black solid'}}/>
            </div>
            <div style={{padding:'0.6 rem'}}>
              <img src='https://i.pinimg.com/564x/7c/81/8c/7c818c14c74964610a3601bda3eba946.jpg' alt=""  className='aumentoImg' style={{width:'10rem', height:'12rem', borderRadius:'1rem', border:' 5px black solid'}}/>
            </div>
            <div style={{padding:'0.6 rem'}}>
              <img src='https://i.pinimg.com/564x/34/ad/bf/34adbf92b50198013bc64775ed0a5616.jpg' alt=""  className='aumentoImg' style={{width:'10rem', height:'12rem', borderRadius:'1rem', border:' 5px black solid'}}/>
            </div>
          </div>

          

            </main>
            


        </body>
    </div>
    
    
    
    
    </>
  )
}

export default Inicio