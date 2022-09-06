import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from  'react-redux';
// call the store component
import store from './redux/store';


// const rootElement = document.getElementById('root');

// render(
//   <BrowserRouter> <App /></BrowserRouter>, rootElement);

ReactDOM.render(
 <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')

)

reportWebVitals();
