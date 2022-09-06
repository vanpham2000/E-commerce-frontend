import './productscreen.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate} from 'react-router-dom';
import {getProductsDetail} from '../redux/action/productAction';
import {AddtoCart} from '../redux/action/cartAction';
// import {getSize} from '../redux/action/Getsize'


const ProductScreen =() =>{



  const params =  useParams();
  const navigate = useNavigate();


  // const [qty, setQty] = useState(1);



    const [option, setoption] = useState(0);
 
    // setarray(oldarray => [...oldarray, product.size]);
    
    const [size, setsize] = useState([]);
  const dispatch = useDispatch();

  const ProductsDetail = useSelector(state => state.getProductsDetail);

  const {product, loading, error} = ProductsDetail;


useEffect(() => {

  // use this to match the id on the route 
if (params.id !== product._id){
dispatch(getProductsDetail(params.id))

}


}, [dispatch, params.id]);




// everytime this page load I want to make a dispate to list the product





const addToCartHandler = () =>{
 
dispatch(AddtoCart(product._id, option));

navigate('/cart');



};





// const [array, setarray] = useState([]);




// // if (!Size) return null;


// console.log(Size);
const [isDisabled, ] = useState(false);


 return <div className='productscreen'>

{loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>



<div className='ProductLeft'> 


<div className='LeftImage'>
    
<img src={product.imageUrl} alt={product.name} />
<p className="bottmemdescript">{product.description}</p>
    
    </div>
  <div className="linfor">
      <p className="leftname">{product.name}</p>
      <p className="leftprice">${product.price}</p>
      {/* <p className="leftdescript">Some kind of description</p> */}
      
      <p className="status">Status:<span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"} </span></p>
    {/* <p className="Quantity">Quantiy: 
    <select value={qty} onChange={(e) => setQty(e.target.value)}>
        {[...Array(product.countInStock).keys()].map((x) =>(

 
           <option key={x+1} value={x+1}>
             
             {x+1}</option>
        ))}
        
        </select></p> */}
       
     {/* <Size /> */}
<p className="Size">Size: 


<select className="form-select SizeSelection"   onChange={(e) => setoption(e.target.value)}aria-label="Default select example">
  <option disabled>Open this select menu</option>
  {product.size && product.size.map((i) => <option value={i}>{i}</option>)}
</select></p>
        {/* <select  className='SizeSelection' value={option}  onChange={(e) => setoption(e.target.value)}>
      
        
        {product.size && product.size.map((i) => <option value={i}>{i}</option>)}
     


        </select></p>
  
  {/* {product.size && product.size.map((i) => <li value={product._id}>{i}</li>)} */}
        <p>         
            <button className='button' onClick={addToCartHandler}  type='button'>Add to Cart</button>
           
        </p>
    
      </div>

 </div>




        
       </>
        )}



    </div>


};
  export default ProductScreen