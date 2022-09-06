import "./Product.css";
import {Link} from 'react-router-dom';


const Product = ({imageUrl,name,description,price, productId}  ) => {

  

  return (

 
    <div className="Product">
  
<Link to={ `/product/${productId}`} className="clickMEforinfo">
    <img className='imgs'src={imageUrl} alt={name} />
    </Link>
    <div className="productinfo">
<p className="nameinfo"> {name}</p>
<p className="descriptinfo"> {description.substring(0, 100)}...</p>
{/* <p className="instockinfo"> {countInStock}</p> */}
<p className="priceinfo">${price}</p>

    </div>
  
    </div>
  
  )
};

export default Product