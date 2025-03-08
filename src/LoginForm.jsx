"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import AuthHeader from "./AuthHeader";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import GoogleAuthButton from "./GoogleAuthButton";
import RegisterButton from "./RegisterButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../credentials";
import { useNavigate } from "react-router-dom";


const auth = getAuth(app);

const LoginForm = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingresa un email válido.");
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user.user.email);
      console.log(user.user.uid);
      navigation("/");
    } 
      catch (error) {
        console.log(error.message)
        if (error.message === 'Firebase: Error (auth/invalid-credential).') {
            setError('Credenciales invalidas')
        }
    }
  };

  return (
    <main className={styles.loginContainer}>
      <AuthHeader />
      <section className={styles.formContainer}>
        <form className={styles.formWrapper} onSubmit={handleLogin}>
          {error && <div className='text-red-500'>{error}</div>}
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