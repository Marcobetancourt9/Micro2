import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import MainContainer from './Main/MainContainer.jsx';
import LoginForm from './Login/LoginForm.jsx';
import RegistrationForm from './Register/RegistrationForm.jsx';
import Destino from './Destinos/Destino.jsx'
import Slide1693 from './HomeUsuario/Slide1693.jsx';
export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="destino/:id" element={<Destino/>} />
          <Route path="home" element={<Slide1693 />} />
        </Routes>
        
      </Router>
    );
  }