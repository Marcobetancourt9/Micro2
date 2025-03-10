"use client";
import React, { useState, useEffect } from "react";
import styles from "./LoginForm.module.css";
import AuthHeader from "./AuthHeader";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import GoogleAuthButton from "./GoogleAuthButton";
import RegisterButton from "./RegisterButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../credentials";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Validar que el email sea válido
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingresa un email válido.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Usuario:", userCredential.user.email);
      console.log("UID:", userCredential.user.uid);
      navigate("/home"); // Redirigir al home
    } catch (error) {
      console.error("Error de autenticación:", error.message);

      if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password") {
        setError("Credenciales inválidas. Verifica tu correo y contraseña.");
      } else if (error.code === "auth/user-not-found") {
        setError("No existe una cuenta con este correo.");
      } else {
        setError("Ocurrió un error. Inténtalo de nuevo.");
      }
    }
  };

    useEffect(() => {
      checkUser()
    }, []);
  
    async function checkUser(){
      auth.authStateReady().then(()=>{
        if(auth.currentUser){
          navigate("/home")
        }
        console.log(auth)
      })
    }


  return (
    <main className={styles.loginContainer}>
      <AuthHeader className="center" />
      <section className={styles.formContainer}>
        <form className={styles.formWrapper} onSubmit={handleLogin}>
          {error && <div className="text-red-500">{error}</div>}
          <h1 className={styles.largeHeading}>Inicio de Sesión</h1>
          <h2>Inicia sesión en tu cuenta Ecomet</h2>
          
          {/* Se pasa el estado del padre a los inputs */}
          <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className={styles.loginButton}>
            Iniciar Sesión
          </button>

          <GoogleAuthButton />
          <RegisterButton />
        </form>
      </section>
    </main>
  );
};

export default LoginForm;
