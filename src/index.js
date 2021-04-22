import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createStore, applyMiddleware } from 'redux'
import ReactDOM from "react-dom";
import "./index.css";
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from "./components/App";
import { Provider } from 'react-redux'
import * as serviceWorker from "./serviceWorker";
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
serviceWorker.register();
