import { PayPalButton } from "react-paypal-button-v2";
import { useSelector } from 'react-redux';
import React from 'react'

const Paypal = () => {

  const cart = useSelector((state) => state.cart);
    
  const { cartItems} = cart;
  console.log('cartItems:',cartItems);

  const price = () =>{


    return cartItems.reduce((price, item) => (item.price) + price, 0);
  
  }
  return <div>

<PayPalButton

options={{
  clientId: "AbvKUTPJu89O0iF3iqC6N4Co7NkbjFuCLeyXThXW67FKzVPR6ofFOULvfYTA4OhMENXURPyH2uJeJQjo"
}}
        amount={price()}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {

          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          // return fetch("/paypal-transaction-complete", {
          //   method: "post",
          //   body: JSON.stringify({
          //     orderID: data.orderID
          //   })
          // });
        }}
      />


  </div>
  
}

export default Paypal

