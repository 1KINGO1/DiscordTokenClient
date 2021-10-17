import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {mainReducer} from "./store/mainReducer";
import {Provider} from "react-redux";

let store = createStore(mainReducer);

ReactDOM.render(
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>,
  document.getElementById('root')
);