
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

//screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import About from "./screens/About";
import Contact from "./screens/Contact";
import PaymentMethod from './screens/PaymentMethod';
//components
import Navbar from './components/Navbar';
import BackDrop from './components/BackDrop';
import SideDraw from './components/SideDraw';





function App() {
 


const [sideToggle, setSideToggle]= useState(false);
  return( 
    <Router>

      <Navbar click={() => setSideToggle(true)}   />
  
      <SideDraw show={sideToggle} />
      <BackDrop show={sideToggle}  click={() => setSideToggle(false)}/>
      
   
               <main>
             
                 <Routes>
                  <Route path="/" element ={<HomeScreen/>}/>
                  <Route  path="/product/:id" element ={<ProductScreen  />}/>
                  <Route  path="/cart" element ={<CartScreen />}/>
                  <Route  path="/about" element ={< About />}/>
                  <Route  path="/contact" element ={<Contact />}/>
                  <Route  path="/payment" element ={<PaymentMethod/>}/>
                 
                 </Routes>
                 
               </main>

 

  
</Router>
  );
}

export default App;

