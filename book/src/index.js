import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, connect } from "react-redux";
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware, compose} from 'redux'
import store from './store';
import thunk from 'redux-thunk'

let persistor = persistStore(store);

const store = createStore(rootReducers, compose(
  applyMiddleware(thunk), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)


ReactDOM.render(
  <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
