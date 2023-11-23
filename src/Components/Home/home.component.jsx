import { React, Component, useState, useEffect } from 'react';
import Search from '../Search/search.component';
import SiteList from '../SiteList/site-list.component';

import '../../App.css';
import { BrowserRouter, Router, Routes, Route, Switch } from 'react-router-dom';
import Modal from '../Modal/modal.component';

import CreateSite from '../Crud/Site/create-site.component';
import EditSite from '../Crud/Site/edit-site.component';

const  Home = () => {
  const [sites, setSites] = useState(null);
  const [search, setSearch] = useState(null);
  const [filterSites, setFilterSites] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/sites')
    .then((response) => response.json())
    .then((sites) => {setSites(sites); setFilterSites(sites);} 
    );
  }, []);

  const onSearchSitesChange = (event) => {
    const search = event.target.value.toLocaleLowerCase();

    setSearch(search);

    const filteredSites = sites && sites.filter((site) => {
      return site.name.toLocaleLowerCase().includes(search);
    });

    setFilterSites(filteredSites);
  };

    return (
      <div className="App">
        
        <header className="App-header">

          <div id='Frame1'>
            <ul id='rectangle2766'>
              <li>14 On Road</li>
              <li>3 Completed</li>
              <li>2 On Hold</li>
            </ul>

           <Search 
              onSearchSitesProp = { onSearchSitesChange }
              placeholder = 'Search a driver'
              className = 'search'
            />

            {filterSites && <SiteList
              filterSites = { filterSites } 
              classNameOdd = 'odd link'
              classNameEven = 'link'
            />}   

          </div>
        </header>
      </div>
    )
}

export default Home;




















/*const deleteSite = (id) => {
  const filteredSites = sites.filter(site => site.id !== id);
}*/
