import React, { useState } from 'react';

export default function PayPalPayment() {
    const [paymentStatus, setPaymentStatus] = useState(null);

    const handlePayment = () => {
        // Simula el procesamiento del pago
        setTimeout(() => {
            // Simula un pago exitoso
            setPaymentStatus('success');
        }, 1500); // Simula 1.5 segundos de procesamiento
    };

    return (
        <div>
            <h2>Pago simulado</h2>
            <button onClick={handlePayment}>Pagar</button>

            {paymentStatus === 'success' && (
                <p>Pago exitoso. ¡Gracias por tu compra!</p>
            )}
        </div>
    );
}