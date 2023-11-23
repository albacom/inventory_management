import { React, Component, useState, useEffect } from 'react';

import Search from './Components/Search/search.component';
import SiteList from './Components/SiteList/site-list.component';

import './App.css';
import { BrowserRouter, Router, Routes, Route, Switch } from 'react-router-dom';
import Modal from './Components/Modal/modal.component';

import Home from './Components/Home/home.component';
import CreateSite from './Components/Crud/Site/create-site.component';
import EditSite from './Components/Crud/Site/edit-site.component';
import Dashboard from './Components/Dashboard/dashboard.component';
import ShowSite from './Components/Crud/Site/show.component';

const  App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />}></Route>
          <Route path = '/create-site' element = {<CreateSite />}></Route>
          <Route path = '/update-site' element = {<EditSite />}></Route>
          <Route path = '/site-dashboard' element = {<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    )
}
export default App;


