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
        e.preventDefault();
        setShowConfirmation(true);
    };

    const confirmPayment = () => {
        setTimeout(() => {
            setPaymentStatus('success');
            setShowConfirmation(false);
        }, 1500);
    };

    return (
        <div className={styles.paymentContainer}>
            {!showConfirmation && paymentStatus !== 'success' && (
                <form className={styles.paymentForm} onSubmit={handlePayment}>
                    <div className={styles.formGroup}>
                        <label className={styles.paymentLabel}>Número de tarjeta</label>
                        <input
                            className={styles.paymentInput}
                            type="text"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.paymentLabel}>Fecha de vencimiento</label>
                        <input
                            className={styles.paymentInput}
                            type="text"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="MM/AA"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.paymentLabel}>CI</label>
                        <input
                            className={styles.paymentInput}
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="XXXXXXXX"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.paymentLabel}>Nombre</label>
                        <input
                            className={styles.paymentInput}
                            type="text"
                            value={cardHolder}
                            onChange={(e) => setCardHolder(e.target.value)}
                            placeholder="Nombre completo"
                        />
                    </div>

                    <button className={styles.paymentButton} type="submit">Pagar</button>
                </form>
            )}

            {showConfirmation && (
                <div className={styles.confirmation}>
                    <div>
                        <h3>Confirmar pago</h3>
                        <p>Número de tarjeta: {cardNumber}</p>
                        <p>Fecha de vencimiento: {expiryDate}</p>
                        <p>CVV: {cvv}</p>
                        <p>Nombre del titular: {cardHolder}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className={styles.paymentButton} onClick={confirmPayment}>Confirmar</button>
                        <button className={styles.paymentButton} onClick={() => setShowConfirmation(false)}>Cancelar</button>
                    </div>
                </div>
            )}

            {paymentStatus === 'success' && (
                <p className={styles.successMessage}>Pago exitoso. ¡Gracias por tu compra!</p>
            )}
        </div>
    );
}