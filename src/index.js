import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import "./styles/_index.scss"
import App from './App';
import store from "./app/store"

//use React 17
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
