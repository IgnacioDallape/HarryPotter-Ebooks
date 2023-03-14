import React from 'react';
import ReactDOM from 'react-dom/client';
import Api from './Components/Api/Api';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Books from './Components/Libros/Books';
import Nosotros  from './Components/Nosotros/Nosotros';
import Inicio from './Components/Inicio/Inicio';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './Components/Footer/Footer';
import Libro1 from './Components/Libros/LibrosData/Libro1';
import HarryPotter from './Components/Personajes/HarryPotter';
import Hermione from './Components/Personajes/Hermione';
import Ron from './Components/Personajes/Ron';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter> 
    <NavBar/>
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/Books" element={<Books/>} />
          <Route exact path="/Nosotros" element={<Nosotros/>} />
          <Route exact path="/api" element={<Api/>} />
          <Route exact path='/libro1' element={<Libro1/>}/>
          <Route exact path='/harry' element={<HarryPotter/>}/>
          <Route exact path='/hermione' element={<Hermione/>}/>
          <Route exact path='/ron' element={<Ron/>}/>
          
        </Routes>
    <Footer/>
    </BrowserRouter>
    
    

  </React.StrictMode>
);

