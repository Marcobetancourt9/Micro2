import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import MainContainer from './Main/MainContainer.jsx';
import LoginForm from './Login/LoginForm.jsx';
import RegistrationForm from './Register/RegistrationForm.jsx';
import Destino from './Destinos/Destino.jsx'
import HomeUsuario from './HomeUsuario/HomeUsuario.jsx';
import Tips from './Consejo/Tips.jsx';
import ContactPage from './Contactanos/ContactPage.jsx';
import Calendar from './Calendario/Calendar.jsx';
import EditProfileForm from './Editar_perfil/EditProfileForm.jsx';
import PaypalLoginForm from './Paypal/PaypalLoginForm.jsx';
import Slide16918 from './Pago/Slide16918.jsx';
import Slide1698 from './Menu_Rutas/Slide1698.jsx';
import UserManagementDashboard from './Perfiles/UserManagementDashboard.jsx';

import { getAuth } from "firebase/auth";
import { app } from "../credentials";
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './Header.jsx';
import Head from './Head.jsx';
import HeaderAdmin from './Header_admin.jsx';
import Footer from './Footer.jsx';
const auth = getAuth(app);




export default function App() {
  const [ user, setUser ] = useState("")

  async function checkUser() {
    auth.authStateReady().then(() => {
      setUser(auth.currentUser)
    });
}
  useEffect(() => {
    checkUser();
  }, []);

    return (<>
      <Router>
      {/* SI HAY USUARIO LOGEADO LE MUESTRA UN HEADER U OTRO */}
      {user? <Header/>:<Head/>}
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="destino/:id" element={<Destino/>} />
          <Route path="home" element={<HomeUsuario />} />
          <Route path="consejos" element={<Tips />} />
          <Route path="contactanos" element={<ContactPage />} />
          <Route path="editarp" element={<EditProfileForm />} />
          <Route path="calendario" element={<Calendar />} />
          <Route path="paypal" element={<PaypalLoginForm />} />
          <Route path="pago" element={<Slide16918 />} />
          <Route path="ruta" element={<Slide1698  />} />
          <Route path="perfiles" element={<UserManagementDashboard  />} />
        </Routes>
      <Footer/>
      </Router>
      </>
    );
  }