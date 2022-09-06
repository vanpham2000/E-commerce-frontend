import { createStore, combineReducers, applyMiddleware } from "redux";

import  thunk  from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducer/cartReducer";
// import { PriceReducer } from "./reducer/PriceReducer";

// add the reducer 

import { GetProductDetailsReducer, getProductsReducer} from "./reducer/productReducer";

const reducers = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductsDetail : GetProductDetailsReducer,
   

});
//  thunk making a asynchronist in our action cannot otherwose with redux, redux saga is another middleware
const middleware = [thunk];

const store = createStore(
    
    reducers,

    // add ... middleware is the same as add thunk 
    composeWithDevTools(applyMiddleware(...middleware))
    
    
    );

export default store;

// after this set up connect our application to the store