import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './routes/Router';
import './index.scss';
import ItemsContextProvider from './context/ItemsContexProvider/ItemsContexProvider';

ReactDOM.render(
  <React.StrictMode>
    <ItemsContextProvider>
      <Router />
    </ItemsContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
