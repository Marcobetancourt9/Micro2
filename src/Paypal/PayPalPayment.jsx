import React, { useState } from 'react';
import styles from './PaypalLoginForm.module.css';

export default function PayPalPayment() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handlePayment = (e) => {
        e.preventDefault(); // Evita la recarga de la página
        setShowConfirmation(true); // Muestra la confirmación
    };

    const confirmPayment = () => {
        // Simula el procesamiento del pago
        setTimeout(() => {
            // Simula un pago exitoso
            setPaymentStatus('success');
            setShowConfirmation(false); // Oculta la confirmación
        }, 1500); // Simula 1.5 segundos de procesamiento
    };

    return (
      <div className={styles.paymentContainer}>
          {!showConfirmation && paymentStatus !== 'success' && (
              <form className={styles.paymentForm} onSubmit={handlePayment}>
                  <label className={styles.paymentLabel}>Número de tarjeta:</label>
                  <input 
                      className={styles.paymentInput} 
                      type="text" 
                      value={cardNumber} 
                      onChange={(e) => setCardNumber(e.target.value)} 
                      placeholder="XXXX-XXXX-XXXX-XXXX" // Agrega placeholder
                  />

                  <label className={styles.paymentLabel}>Fecha de vencimiento:</label>
                  <input 
                      className={styles.paymentInput} 
                      type="text" 
                      value={expiryDate} 
                      onChange={(e) => setExpiryDate(e.target.value)} 
                      placeholder="MM/AA" // Agrega placeholder
                  />

                  <label className={styles.paymentLabel}>CI:</label>
                  <input 
                      className={styles.paymentInput} 
                      type="text" 
                      value={cvv} 
                      onChange={(e) => setCvv(e.target.value)} 
                      placeholder="XXXXXXXX" // Agrega placeholder
                  />

                  <label className={styles.paymentLabel}>Nombre del titular de la tarjeta:</label>
                  <input 
                      className={styles.paymentInput} 
                      type="text" 
                      value={cardHolder} 
                      onChange={(e) => setCardHolder(e.target.value)} 
                      placeholder="Nombre Completo" // Agrega placeholder
                  />

                  <button className={styles.paymentButton} type="submit">Pagar</button>
              </form>
          )}

          {showConfirmation && (
              <div className={styles.confirmation}>
                  <h3>Confirmar pago</h3>
                  <p>Número de tarjeta: {cardNumber}</p>
                  <p>Fecha de vencimiento: {expiryDate}</p>
                  <p>CVV: {cvv}</p>
                  <p>Nombre del titular: {cardHolder}</p>
                  <button className={styles.paymentButton} onClick={confirmPayment}>Confirmar</button>
                  <button className={styles.paymentButton} onClick={() => setShowConfirmation(false)}>Cancelar</button>
              </div>
          )}

          {paymentStatus === 'success' && (
              <p className={styles.successMessage}>Pago exitoso. ¡Gracias por tu compra!</p>
          )}
      </div>
  );
}