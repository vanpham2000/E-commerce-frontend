// dispatch all the action to get the data from the database
import * as actionTypes from '../constant/productConstant';

import axios from 'axios';

export const getProducts = () => async (dispatch) =>{

try {

    dispatch({type: actionTypes.GET_PRODUCTS_REQUEST});

    const { data } = await axios.get("/api/product");

    dispatch({type: actionTypes.GET_PRODUCTS_SUCCESS,
         payload:data,});

} catch (error){

    dispatch({type: actionTypes.GET_PRODUCTS_FAIL,
        payload: error.response && error.response.data.message 
        ? error.response.data.message 
        : error.message });



}



};

export const getProductsDetail = (id) => async (dispatch) =>{

    try {
    
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});
    
        const {data} = await axios.get(`/api/product/${id}`);
    
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
         payload:data,});
    } catch (error){
    
        dispatch({type: actionTypes.GET_PRODUCTS_FAIL,payload: 
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message, });


        }
    
    
    
    };



         

    


// remove product

export const removeProductsDetail = () => async (dispatch) =>{
dispatch({type: actionTypes.GET_PRODUCT_DETAILS_RESET});



};









