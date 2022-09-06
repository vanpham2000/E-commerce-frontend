// making HTTP request to backend

import * as actionTypes from '../constant/cartConstant';

import axios from 'axios';



export const AddtoCart = (id, option) => async (dispatch, getState) => {

const {data} = await axios.get(`/api/product/${id}`);


dispatch({


type:actionTypes.ADD_TO_CART,
payload:{

    product: data._id,
    name:data.name,
    imageUrl: data.imageUrl,
    price: data.price,
    countInStock: data.countInStock,
    size1: data.size1,
    size2: data.size2,
    size3: data.size3,
    size: data.size,
    default: data.default,
    option

    
},

});
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const RemovefromCart = (id) => (dispatch, getState) => {

dispatch({

type: actionTypes.REMOVE_FROM_CART,
payload: id


})
localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}


    
    

