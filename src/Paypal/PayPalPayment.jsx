import React, { useState } from 'react';

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
        <div>
            <h2>Pago simulado</h2>
            {!showConfirmation && paymentStatus !== 'success' && (
                <form onSubmit={handlePayment}>
                    <label>Número de tarjeta:</label>
                    <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />

                    <label>Fecha de vencimiento:</label>
                    <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />

                    <label>CVV:</label>
                    <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />

                    <label>Nombre del titular de la tarjeta:</label>
                    <input type="text" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />

                    <button type="submit">Pagar</button>
                </form>
            )}

            {showConfirmation && (
                <div>
                    <h3>Confirmar pago</h3>
                    <p>Número de tarjeta: {cardNumber}</p>
                    <p>Fecha de vencimiento: {expiryDate}</p>
                    <p>CVV: {cvv}</p>
                    <p>Nombre del titular: {cardHolder}</p>
                    <button onClick={confirmPayment}>Confirmar</button>
                    <button onClick={() => setShowConfirmation(false)}>Cancelar</button>
                </div>
            )}

            {paymentStatus === 'success' && (
                <p>Pago exitoso. ¡Gracias por tu compra!</p>
            )}
        </div>
    );
}