import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import MainContainer from './Main/MainContainer.jsx';
import LoginForm from './Login/LoginForm.jsx';
import RegistrationForm from './Register/RegistrationForm.jsx';
import Destino from './Destinos/Destino.jsx'
export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="destino" element={<Destino/>} />
        </Routes>
        
      </Router>
    );
  }