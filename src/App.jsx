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
import ExcursionsSection from './Excursiones/ExcursionsSection.jsx';
import Forum from './Foro/Forum.jsx';
import Agregar from './Agregar/Agregar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import UserAdministration from './Administrarusuarios/UserAdmin.jsx';
import UserManagementPage from './Administrarusuarios/UserManagement/UserManagementPage.jsx';
import UserManagementDashboard from './Perfiles/UserManagementDashboard.jsx';
import GestionarReservas from './GestionarReservas/GestionarReservas.jsx';
import FinanceAdministration from './AdminstradorFinanzas/FinanceAdmin.jsx';

export default function App() {
 

    return (<>
      <Router>
        <Header/>
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
            <Route path="agregar" element={<Agregar />} />
            <Route path="excursion" element={<ExcursionsSection />} />
            <Route path="gestionarreservas" element={<GestionarReservas />} />
            <Route path="foro" element={<Forum />} />
            <Route path="adminuser" element={<UserAdministration />} />
            <Route path="userman/:id" element={<UserManagementPage />} />
            <Route path="finanzas" element={<FinanceAdministration />} />
            
          </Routes>
        <Footer/>
      </Router>
      </>
    );
  }