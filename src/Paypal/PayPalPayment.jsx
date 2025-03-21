import React, { useState } from 'react';
import styles from './PaypalLoginForm.module.css';

const rutas = [
    { id: "AntiguoTeleferico", nombre: "Antiguo Teleferico" },
    { id: "Lagunazo", nombre: "Lagunazo" },
    { id: "QuebradaQuintero", nombre: "Quebrada Quintero" },
];

export default function PayPalPayment() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [rutaSeleccionada, setRutaSeleccionada] = useState(null);

    const validarFormulario = () => {
        if (!cardNumber.trim()) {
            alert('Por favor, ingresa el número de tarjeta.');
            return false;
        }

        if (!expiryDate.trim()) {
            alert('Por favor, ingresa la fecha de vencimiento.');
            return false;
        }

        if (!cvv.trim()) {
            alert('Por favor, ingresa el CI.');
            return false;
        }

        if (!cardHolder.trim()) {
            alert('Por favor, ingresa el nombre del titular.');
            return false;
        }

        if (!rutaSeleccionada) {
            alert('Por favor, selecciona una ruta.');
            return false;
        }

        return true;
    };

    const handlePayment = (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

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
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5337c2e761da58e32576f029bfb16a6b09c930f02b0aa4acaf420432439168ef?placeholderIfAbsent=true&apiKey=5865bf14632e4b9982ad8baa15ee726e"
                alt="PayPal Logo"
                style={{ width: '150px', marginBottom: '20px' }}
            />
            {!showConfirmation && paymentStatus !== 'success' && (
                <form className={styles.paymentForm} onSubmit={handlePayment}>
                    <div className={styles.formGroup}>
                        <label className={styles.paymentLabel}>Seleccionar Ruta</label>
                        <select
                            value={rutaSeleccionada}
                            onChange={(e) => setRutaSeleccionada(e.target.value)}
                            className={styles.paymentInput}
                        >
                            <option value="">Selecciona una ruta</option>
                            {rutas.map((ruta) => (
                                <option key={ruta.id} value={ruta.id}>{ruta.nombre}</option>
                            ))}
                        </select>
                    </div>

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
                        <label className={styles.paymentLabel}>Nombre del titular</label>
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
                        <p>Ruta Seleccionada: {rutas.find(ruta => ruta.id === rutaSeleccionada)?.nombre}</p>
                        <p>Número de tarjeta: {cardNumber}</p>
                        <p>Fecha de vencimiento: {expiryDate}</p>
                        <p>CI: {cvv}</p>
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