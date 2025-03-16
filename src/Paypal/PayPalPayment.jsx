import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useNavigate } from 'react-router';
import React from 'react'



const PayPalButtonComponent = () => {

  const navigate = useNavigate()

  const initialPaypalOptions = {
    "client-id": "ARWA6ZwSow2Vlidf0pJ4Fe6A--7Zw0zEaTDu4nKOgO_E2qpqK1kO8bRea0LGdrelp1gZ6UqvrZaF-mge",
    currency: "USD",
    intent: "capture",
  }

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [{
        amount: {
          currency_code: "USD",
          value: "5",
        },
      }],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const name = details.payer.name.given_name;

      console.log(name)
      console.log("")
      alert(`Transaction completed by ${name}`);;
      navigate(`/exitosa`)
    });
  }

  return (
    <>
      <PayPalScriptProvider options={initialPaypalOptions}>
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
      </PayPalScriptProvider>
    </>
  )


}


function App() {

  return (
    <>

      <PayPalButtonComponent />

    </>
  )
}

export default function PayPalPayment() {
  return (
    <div>PayPalPayment</div>
  )
}