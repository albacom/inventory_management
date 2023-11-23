import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import CreateSite from './Components/Crud/Site/create-site.component';
import EditSite from './Components/Crud/Site/edit-site.component';
import Modal from './Components/Modal/modal.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<Route path = '/create-site' element = {<CreateSite />}></Route>
reportWebVitals();


