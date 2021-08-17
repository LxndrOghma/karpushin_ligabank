import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import App from './components/app/app';
import { createApi } from './services/api';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';

const api = createApi();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
