import Paypal from '../components/Paypal';
import  './PaymentMethod.css';
import {useSelector } from 'react-redux';



function PaymentMethod() {

    const cart = useSelector((state) => state.cart);
    
    const { cartItems} = cart;
    console.log('cartItems:',cartItems);


  return <div>
      
   
{/* <p className='Paypal'><Paypal /></p> */}

          <div className='Pay'> We Will be using paypal method for now to ensure our customers have a save transaction
          <p> Make sure your billing and shipping address is correct on paypal</p></div>

          <div className='Paypal'> <Paypal /></div> 
          
         
        
     {/* <p className='Paypal'> <Paypal /> </p> */}



  </div>
  
}

export default PaymentMethod