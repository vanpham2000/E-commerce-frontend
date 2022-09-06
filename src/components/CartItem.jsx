import './cartitem.css'
import {Link} from 'react-router-dom'



const CartItem = ({item, removeCart, SizeChangeHandler}) => {

 
  return <div className='Cartitem'> 


<div className="cartItemimg">
 <img className='imgss'src={item.imageUrl} alt={item.name} />
 </div>
  

  <Link to={`/product/${item.product._id}`} className='cartitemName'>
       <p>Product1</p>
  </Link>

  <p className="cartitemprice">${item.price}</p>

  {console.log(item.price)}
{/* 
  <select  className='cartselection' value={item.qty}  onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
 
        {[...Array(item.countInStock).keys()].map((x) =>(

 
           <option key={x+1} value={x+1}>
             
             {x+1}</option>
        ))}
        </select> */}


       


       {/* <h5 className="Size" value={item.option} onChange={(e) => SizeChangeHandle(item.product, e.target.value)}>Size: 
                      
      <select  >{item.size.map((sizes) => <option>{item.size}</option>)}</select>
        
        </h5> */}


        

        



          <p className="Sizess">Size: </p>   <select className="form-select Sizes"    value={item.option}  onChange ={(e) => SizeChangeHandler(item.product, e.target.value)} aria-label="Default select example">
  <option disabled>Open this select menu</option>
  {item.size.map((Sizes) => <option value={Sizes} key={Sizes}>{Sizes}</option>)}
</select>
         
        


        <button className='dbutton' onClick={(e) => removeCart(item.product, e.target.value)}><i className='fas fa-trash'></i></button>
  </div>

}

export default CartItem