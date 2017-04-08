import React from 'react'
import { render } from 'react-dom'
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import configureStore from './store/configureStore';
import {setStore} from './store/store';

const store = configureStore();
setStore(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
