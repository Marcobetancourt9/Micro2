import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import MainContainer from './MainContainer';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
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