import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import MainContainer from './MainContainer';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
        </Routes>
        
      </Router>
    );
  }