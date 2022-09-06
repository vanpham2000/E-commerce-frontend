import './homescreen.css';
import Product from '../components/Product';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useState} from 'react';
// action

import{getProducts as listP } from '../redux/action/productAction';



const HomeScreen =() =>{
// const [SearchTearm, setSearchTerm] = useState("");

const dispatch = useDispatch();

const getProducts = useSelector(state => state.getProducts);

// destructor and get product array
const {products, loading, error} = getProducts;

// everytime this page load I want to make a dispate to list the product

useEffect(() => {

dispatch(listP() );


}, [dispatch]);


const [query, getQuery] = useState('');

// console.log(item);
    return <div className='Homescreen'>

    {/* <Searchfor/> */}

    <div className="container">
    <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-8">
            <div className="search"> <i className="fa fa-search"></i> <input type="text" placeholder='Search here' className='form-control' onChange={(e) => getQuery(e.target.value)}/> <button className="btn btn-primary">Search</button> </div>
        </div>
    </div>
</div>
{/* <input type="text" placeholder='Search here' className='form-control' onChange={(e) => getQuery(e.target.value)}/>    */}
   
      <h2 className='HscreeenTitle'>Products</h2>
      <div className='Hscreenproducts'>

        { loading ? (
        <h2>loading...</h2> 
        ): error ? (
        <h2>{error}</h2> 
        ): (

          // products.map((products) => <Product 
          // key={products._id} 
          // productId ={products._id}
          // name ={products.name}
          // price ={products.price}
          // description ={products.description}
          // imageUrl = {products.imageUrl}
        

          
          // /> 
          
          products.filter((value)=>{
          if (query === ""){

            return value;
          }else if(value.name.toLowerCase().includes(query.toLowerCase())){

            return value;
          }}).map((products) => <Product 
          key={products._id} 
          productId ={products._id}
          name ={products.name}
          price ={products.price}
          description ={products.description}
          imageUrl = {products.imageUrl}
        size = {products.size}

          
          /> 
        ))}
       





      </div>
  

    </div>


}
  export default HomeScreen