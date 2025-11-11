import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import './styles/style.css'
import './styles/images.css'
import './styles/no-touch.min.css'
import './styles/rtl.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
