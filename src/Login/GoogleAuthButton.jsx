import React from "react";
import styles from "./LoginForm.module.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../credentials";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../credentials";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const signInWithGooglePopup = () => signInWithPopup(auth, provider);



const GoogleAuthButton = () => {
  const navigate = useNavigate();
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      const user = response.user;
      const info = await getDoc(doc(db, "users", user.uid))
      if (!info.data()) {
        await setDoc(doc(db, "users", user.uid), {
          nombre: user.displayName.split(" ")[0],
          apellido: user.displayName.split(" ")[1],
          email: user.email,
          genero: "Desconocido",
          telefono: "Desconocido",
          documento: "Desconocido",
          edad: 0,
          tipoRegistro: "Estudiante",
          uid: user.uid,
          fechaCreacion: new Date(),
        });
      }

      navigate("/home");
    }
  }

  return (
    <button
      type="button"
      className={styles.googleButton}
      onClick={logGoogleUser}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/29461731216392c6e7178075a5dba3ac5dfa4fd3b3cefb4a8df876d1eb7f7601?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
        alt="Google Icon"
        className={styles.googleIcon}
      />
      <span className={styles.googleButtonText}>Continuar con Google</span>
    </button>
  );
};

export default GoogleAuthButton;
