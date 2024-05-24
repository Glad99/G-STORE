import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react'

const PayPalPayment = () => {
    const createOrder = async (data) => {
        // Order is created on the server and the order id is returned
        const response = await fetch("/my-server/create-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product skus and quantities
        body: JSON.stringify({
          product: {
            description: "description",
            cost: "123"
          }
        }),
      });
      const order = await response.json();
      return order.id;
    };
    const onApprove = async (data) => {
        // Order is captured on the server and the response is returned to the browser
        const response = await fetch("/my-server/capture-paypal-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID
        })
      });
      return await response.json();
    }
  return (
    <div>
        < PayPalButtons createOrder = {
            (data, actions) => createOrder(data, actions)
        }
        onApprove = {
            (data, actions) => onApprove(data, actions)
        }
            />
    </div>
  )
}

export default PayPalPayment