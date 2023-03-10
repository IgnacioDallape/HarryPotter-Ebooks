import React from 'react';
import ReactDOM from 'react-dom/client';
import Api from './Components/Api/Api';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter> 
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Api/>} />
        </Routes>
    </BrowserRouter>
    


  </React.StrictMode>
);

