// start building nav first

import './navbar.css';
import {Link} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';




const Navbar =({click}) =>{

    // deconstruct the cartItems array
const cart = useSelector((state) => state.cart);
const {cartItems} = cart;











    return (

<nav className="navbar">
      
       <div className="navbar__logo">
           <h2>TheVstore</h2>



       </div>




 
     <ul className="navbar__links">
 
 

    <li>
        <Link to="/" className='cart_link'>
       
       Shop     
          </Link>
    </li>
    <li>
        <Link to="/about" className='About_link'>
       
       About
          </Link>
    </li>

    <li>
        <Link to="/contact" className='Contact_link'>
       
       Contact
          </Link>
    </li>

    <li>
    
  
        <Link to="/cart" className='cart_link'>
  
        {/* <i className="fas fa-shopping-cart"></i> */}
        <span>
        Cart
        {/* <span className='cartlogo__badge'></span> */}
        </span>
        </Link>
        
    </li>

  
     </ul>
    
     
       
       
      
<div className="menu" onClick={click}>
<div></div>
<div></div>
<div></div>


</div>

</nav>



    )



}

export default Navbar