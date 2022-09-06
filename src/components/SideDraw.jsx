import './sidedraw.css';
import { Link } from 'react-router-dom';
const SideDraw = ({show,Click}) => {
  const sideDrawerClass = ["sideDraw"];

  if (show){

    sideDrawerClass.push('show');
  }
  return <div className={sideDrawerClass.join(" ")}>


    <ul className='sideDraw_link' onClick={Click}>
   

    <li>
        <Link to="/" >
       
       Shop     
          </Link>
    </li>

    <li>
    
  
        <Link to="/cart" >
  
        <i className="fas fa-shopping-cart"></i>
        <span>
        Cart
         {/* <span className='sideDrawer__badge'>0</span> */}
        </span>
        </Link>
        
    </li>

    <li>
        <Link to="/about" >
       
       About
          </Link>
    </li>

    <li>
        <Link to="/contact" >
       
       Contact
          </Link>
    </li>

    
    </ul>
  </div>
  
};

export default SideDraw