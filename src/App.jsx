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
import { useState, useEffect } from 'react';
import Head from './Head.jsx';
import Header from './Header.jsx';
import HeaderAdmin from './Header_admin.jsx';
import Footer from './Footer.jsx';
import { getAuth } from 'firebase/auth';
import { app, db } from "../credentials";
import { doc, getDoc } from "firebase/firestore";
import UserManagementDashboard from './Perfiles/UserManagementDashboard.jsx';


const auth = getAuth(app);

export default function App() {
  const [ user, setUser ] = useState("")
  const [ userInfo, setUserInfo ] = useState()

  async function checkUser() {
    auth.authStateReady().then(() => {
      setUser(auth.currentUser)
      return auth.currentUser
    }).then((usuario) => {
      return getDoc(doc(db, "users", usuario.uid));
    }).then((info)=>{
      setUserInfo(info.data())
    })
}
  useEffect(() => {
    checkUser();
  }, []);

    return (<>
      <Router>
        {/* Usuario No logeado */}
      {!user && <Head/>} 
        {/* Estudiante */}
      {user && userInfo && userInfo.tipoRegistro == "Estudiante" && <Header/>}
        {/* Administrador */}
      {user && userInfo && userInfo.tipoRegistro == "Administrador" && <HeaderAdmin/>}
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
          <Route path="perfiles" element={<UserManagementDashboard />} />
        </Routes>
      <Footer/>
      </Router>
      </>
    );
  }