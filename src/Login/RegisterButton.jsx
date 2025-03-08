import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from "./LoginForm.module.css";

const RegisterButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/register');
  };

  return (
    <button
      type="button"
      className={styles.registerButton}
      onClick={handleButtonClick}
    >
      Regístrate
    </button>
  );
};

export default RegisterButton;

