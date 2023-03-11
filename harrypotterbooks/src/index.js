import React from 'react';
import ReactDOM from 'react-dom/client';
import Api from './Components/Api/Api';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Books from './Components/Libros/Books';
import Formulario from './Components/Contacto/Formulario';
import Inicio from './Components/Inicio/Inicio';
import './styles.css';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter> 
    <NavBar/>
        <Routes>
          <Route exact path="/" element={<Inicio/>} />
          <Route exact path="/Books" element={<Books/>} />
          <Route exact path="/Formulario" element={<Formulario/>} />
          <Route exact path="/api" element={<Api/>} />
        </Routes>
    </BrowserRouter>
    
    

  </React.StrictMode>
);

