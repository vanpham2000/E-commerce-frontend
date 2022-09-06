import './cartscreen.css';
import CartItem from '../components/CartItem';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {AddtoCart, RemovefromCart} from '../redux/action/cartAction';


const CartScreen =() =>{

const dispatch = useDispatch();

const cart = useSelector((state) => state.cart);

const { cartItems} = cart;
console.log('cartItems:',cartItems);


// const qtyChangeHandler = (id,qty) =>{
//   dispatch(AddtoCart(id,qty))



// }

const SizeChangeHandler = ( id,option, ) =>{
  dispatch(AddtoCart(id, option))



}


// const getSize = (id) =>

// {
//   dispatch(AddtoCart(id));


// }
const removeCart = (id) =>{


  dispatch(RemovefromCart(id));

}

const Price = () =>{


  return cartItems.reduce((price, item) => (item.price) + price, 0);

}


// const getCartCount = () =>{

// return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);


// }

// const getTotal = () =>{

//   return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
  
  
//   }



    return <div className='cartscreen'>
  <div className="Screenleft">
    
    <h2>Your Cart!
    </h2>

   {cartItems.length === 0 ? (
    <div className='emptyCart'> your cart is empty <Link to="/"> back to shop</Link> </div>




   ):(cartItems.map((item) =>  <li key={item}><CartItem  item={item} SizeChangeHandler={SizeChangeHandler}   removeCart ={removeCart} /></li>
               
   
   
  ))
   
   
   }

    
    </div>

    <div className="Screenright">
      <div className="cartInfo">
        
        {/* <p>Quanity: {getCartCount()} </p> */}
        <p>Total:${ Price()}</p>
        
        
        </div>

        <div> 
          <Link to="/payment">
          <button className='checkout'>$Checkouts$ </button></Link>
        </div>
      </div>
  </div>

  
}
  export default CartScreen