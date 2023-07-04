import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Special+Elite&family=Work+Sans:ital,wght@0,400;0,500;0,600;1,700;1,800&display=swap');
</style>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
