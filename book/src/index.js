import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { persistStore } from 'redux-persist';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'
import { createStore, combineReducers } from "redux";
let persistor = persistStore(store);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
  </Provider>
</React.StrictMode>,
document.getElementById('root')
);

reportWebVitals();
