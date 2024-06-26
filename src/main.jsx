import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import store from './reducers/store.js';
import { Provider } from 'react-redux';



//the value of the store property should be the imported store 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 

      <App />

    </Provider>
  </React.StrictMode>,
);
